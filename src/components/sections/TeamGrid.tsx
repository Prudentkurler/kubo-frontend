'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { TeamMember } from '@/types';

export interface TeamGridProps {
  members: TeamMember[];
}

export function TeamGrid({ members }: TeamGridProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4 tracking-tight">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 font-light">
              World-class clinicians, engineers, and researchers building the future of healthcare in Africa
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {members.map((member, index) => (
              <TeamMemberCard 
                key={member.id} 
                member={member} 
                index={index}
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <TeamMemberModal 
        member={selectedMember} 
        onClose={() => setSelectedMember(null)} 
      />
    </>
  );
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
  onClick: () => void;
}

function TeamMemberCard({ member, index, onClick }: TeamMemberCardProps) {
  // Generate avatar with initials
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Generate a color based on the name
  const getAvatarColor = (name: string) => {
    const colors = [
      'bg-blue-500',
      'bg-purple-500',
      'bg-green-500',
      'bg-orange-500',
      'bg-pink-500',
      'bg-indigo-500',
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <Card
        variant="elevated"
        padding="none"
        className="h-full overflow-hidden hover:shadow-strong transition-all duration-300"
      >
        {/* Avatar */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 flex items-center justify-center">
          <div className={`w-32 h-32 rounded-full ${getAvatarColor(member.name)} flex items-center justify-center text-white text-4xl font-light group-hover:scale-110 transition-transform duration-300`}>
            {getInitials(member.name)}
          </div>
        </div>

        {/* Content - Limited Info */}
        <div className="p-6 space-y-3">
          <div>
            <h3 className="text-xl font-normal text-gray-900 mb-1">
              {member.name}
            </h3>
            <p className="text-sm font-light text-blue-600">
              {member.role}
            </p>
          </div>

          {/* Learn More Button */}
          <button
            className="inline-flex items-center gap-2 text-sm font-normal text-gray-600 hover:text-gray-900 transition-colors group/btn"
          >
            <span>Learn more</span>
            <svg
              className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </Card>
    </motion.div>
  );
}

interface TeamMemberModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

function TeamMemberModal({ member, onClose }: TeamMemberModalProps) {
  if (!member) return null;

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getAvatarColor = (name: string) => {
    const colors = [
      'bg-blue-500',
      'bg-purple-500',
      'bg-green-500',
      'bg-orange-500',
      'bg-pink-500',
      'bg-indigo-500',
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="p-8 md:p-12">
            {/* Avatar */}
            <div className="flex flex-col items-center text-center mb-8">
              <div className={`w-32 h-32 rounded-full ${getAvatarColor(member.name)} flex items-center justify-center text-white text-4xl font-light mb-6`}>
                {getInitials(member.name)}
              </div>
              
              <h2 className="text-3xl font-light text-gray-900 mb-2">
                {member.name}
              </h2>
              <p className="text-lg font-light text-blue-600 mb-4">
                {member.role}
              </p>
            </div>

            {/* Bio */}
            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-normal text-gray-900">About</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {member.bio}
              </p>
            </div>

            {/* Social Links */}
            {(member.linkedin || member.twitter) && (
              <div className="flex justify-center gap-4 pt-4 border-t border-gray-200">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-normal text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-normal text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                    Twitter
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
