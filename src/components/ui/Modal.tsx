'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ExclamationTriangleIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

interface ModalConfig {
  title: string;
  message: string;
  type?: 'confirm' | 'alert' | 'prompt';
  confirmText?: string;
  cancelText?: string;
  onConfirm?: (value?: string) => void;
  onCancel?: () => void;
  defaultValue?: string;
  placeholder?: string;
}

interface ModalContextType {
  showModal: (config: ModalConfig) => void;
  alert: (title: string, message: string) => Promise<void>;
  confirm: (title: string, message: string) => Promise<boolean>;
  prompt: (title: string, message: string, defaultValue?: string, placeholder?: string) => Promise<string | null>;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within ModalProvider');
  }
  return context;
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ModalConfig | null>(null);
  const [inputValue, setInputValue] = useState('');

  const closeModal = useCallback(() => {
    setModal(null);
    setInputValue('');
  }, []);

  const showModal = useCallback((config: ModalConfig) => {
    setInputValue(config.defaultValue || '');
    setModal(config);
  }, []);

  const alert = useCallback((title: string, message: string): Promise<void> => {
    return new Promise((resolve) => {
      showModal({
        title,
        message,
        type: 'alert',
        confirmText: 'OK',
        onConfirm: () => {
          closeModal();
          resolve();
        },
      });
    });
  }, [showModal, closeModal]);

  const confirm = useCallback((title: string, message: string): Promise<boolean> => {
    return new Promise((resolve) => {
      showModal({
        title,
        message,
        type: 'confirm',
        confirmText: 'Confirm',
        cancelText: 'Cancel',
        onConfirm: () => {
          closeModal();
          resolve(true);
        },
        onCancel: () => {
          closeModal();
          resolve(false);
        },
      });
    });
  }, [showModal, closeModal]);

  const prompt = useCallback((
    title: string, 
    message: string, 
    defaultValue: string = '',
    placeholder: string = ''
  ): Promise<string | null> => {
    return new Promise((resolve) => {
      showModal({
        title,
        message,
        type: 'prompt',
        confirmText: 'Submit',
        cancelText: 'Cancel',
        defaultValue,
        placeholder,
        onConfirm: (value) => {
          closeModal();
          resolve(value || null);
        },
        onCancel: () => {
          closeModal();
          resolve(null);
        },
      });
    });
  }, [showModal, closeModal]);

  const handleConfirm = () => {
    if (modal?.onConfirm) {
      modal.onConfirm(modal.type === 'prompt' ? inputValue : undefined);
    }
  };

  const handleCancel = () => {
    if (modal?.onCancel) {
      modal.onCancel();
    } else {
      closeModal();
    }
  };

  return (
    <ModalContext.Provider value={{ showModal, alert, confirm, prompt }}>
      {children}
      
      {/* Modal Overlay */}
      <AnimatePresence>
        {modal && (
          <div className="fixed inset-0 z-[9998] flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCancel}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative bg-[#1a1f2e] border border-gray-700 rounded-xl shadow-2xl max-w-md w-full overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-start justify-between p-6 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  {modal.type === 'confirm' && (
                    <ExclamationTriangleIcon className="w-6 h-6 text-yellow-400" />
                  )}
                  {modal.type === 'alert' && (
                    <InformationCircleIcon className="w-6 h-6 text-blue-400" />
                  )}
                  <h3 className="text-lg font-semibold text-white">{modal.title}</h3>
                </div>
                <button
                  onClick={handleCancel}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-gray-300 text-sm leading-relaxed">{modal.message}</p>
                
                {modal.type === 'prompt' && (
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={modal.placeholder}
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleConfirm();
                      if (e.key === 'Escape') handleCancel();
                    }}
                    className="w-full mt-4 px-4 py-2.5 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  />
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-end gap-3 px-6 py-4 bg-gray-800/30 border-t border-gray-700">
                {(modal.type === 'confirm' || modal.type === 'prompt') && modal.cancelText && (
                  <button
                    onClick={handleCancel}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-lg transition-all font-medium"
                  >
                    {modal.cancelText}
                  </button>
                )}
                <button
                  onClick={handleConfirm}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg transition-all font-medium shadow-lg shadow-cyan-500/20"
                >
                  {modal.confirmText || 'OK'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </ModalContext.Provider>
  );
}
