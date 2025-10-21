'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DemoPage() {
  const fullscreenVideoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const fullText = 'See KUBO in Action';
  
  // Typewriter effect with delay
  useEffect(() => {
    const startDelay = setTimeout(() => {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 80); // 80ms per character for smoother typing
      
      return () => clearInterval(typingInterval);
    }, 500); // Start after 500ms delay
    
    return () => clearTimeout(startDelay);
  }, []);

  const handleVideoClick = () => {
    setIsFullscreen(true);
    // Request fullscreen on the video element once modal is shown
    setTimeout(() => {
      if (fullscreenVideoRef.current) {
        if (fullscreenVideoRef.current.requestFullscreen) {
          fullscreenVideoRef.current.requestFullscreen();
        } else if ((fullscreenVideoRef.current as any).webkitRequestFullscreen) {
          (fullscreenVideoRef.current as any).webkitRequestFullscreen();
        }
      }
    }, 100);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <main className="bg-black">
      {/* Hero Section - Clean Black Background */}
      <section 
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative h-screen w-full overflow-hidden bg-black"
      >
        {/* Content with parallax effect */}
        <div 
          className="relative z-10 h-full flex flex-col items-center justify-center px-4 transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
          }}
        >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
              className="text-center max-w-4xl"
            >
              {/* Animated Gradient Text with Typewriter */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight mb-8 leading-[1.1] tracking-tight">
                <span 
                  className="inline-block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-shimmer"
                  style={{
                    backgroundSize: '200% auto',
                    animation: 'shimmer 3s linear infinite'
                  }}
                >
                  {typedText}
                  {typedText.length < fullText.length && (
                    <span className="animate-pulse text-white">|</span>
                  )}
                </span>
              </h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-400 font-light mb-12 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                Real-time chest X-ray analysis powered by MedGemma AI. 
                Watch our platform detect abnormalities in seconds.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-black rounded-full font-light text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
                >
                  Request Access
                </Link>
                <Link
                  href="/technology"
                  className="px-8 py-4 bg-white/10 text-white rounded-full font-light text-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-white/60 text-sm font-light">Scroll to explore</span>
                <svg
                  className="w-6 h-6 text-white/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>
      </section>

      {/* Features Section - Picture-in-Picture Style */}
      <section className="relative bg-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Feature 1 - Speed */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32"
          >
            <div className="order-2 lg:order-1">
              <h2 className="text-5xl font-light mb-6 text-black">
                Instant Analysis
              </h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed mb-6">
                Upload a chest X-ray and receive AI-powered diagnostic insights in seconds. 
                KUBO processes images in real-time, helping clinicians make faster, more informed decisions.
              </p>
              <div className="flex items-center gap-8">
                <div>
                  <div className="text-4xl font-light text-black mb-1">2.3s</div>
                  <div className="text-sm text-gray-500 font-light">Average processing time</div>
                </div>
                <div>
                  <div className="text-4xl font-light text-black mb-1">94.2%</div>
                  <div className="text-sm text-gray-500 font-light">Accuracy rate</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div 
                className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
                onClick={handleVideoClick}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/images/video/vid.webm" type="video/webm" />
                  <source src="/images/video/vid.mp4" type="video/mp4" />
                </video>
                {/* Play overlay indicator */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 2 - Accuracy */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32"
          >
            <div>
              <div 
                className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
                onClick={() => setIsFullscreen(true)}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/images/video/vid.webm" type="video/webm" />
                  <source src="/images/video/vid.mp4" type="video/mp4" />
                </video>
                {/* Play overlay indicator */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-5xl font-light mb-6 text-black">
                Clinically Validated
              </h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed mb-6">
                Trained on over 12,450 chest X-rays and validated with radiologists 
                at UGMC and Korle Bu Teaching Hospital. Every prediction is backed by 
                clinical evidence and expert review.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-black" />
                  <span className="text-gray-700 font-light">Pneumonia detection</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-black" />
                  <span className="text-gray-700 font-light">Tuberculosis screening</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-black" />
                  <span className="text-gray-700 font-light">Cardiomegaly assessment</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 3 - Integration */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 lg:order-1">
              <h2 className="text-5xl font-light mb-6 text-black">
                Seamless Integration
              </h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed mb-6">
                Designed to work within existing hospital workflows. KUBO integrates 
                with PACS systems and can be deployed on-premise or in the cloud, 
                ensuring data sovereignty and compliance.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm text-gray-700 font-light">DICOM compatible</span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div 
                className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
                onClick={() => setIsFullscreen(true)}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/images/video/vid.webm" type="video/webm" />
                  <source src="/images/video/vid.mp4" type="video/mp4" />
                </video>
                {/* Play overlay indicator */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clinical Validation Section - Dark Background */}
      <section className="relative bg-black py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-light text-white mb-6">
              Trusted by Clinicians
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
              Validated through partnerships with Ghana&apos;s leading medical institutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-light text-white mb-2">12,450+</div>
              <div className="text-gray-400 font-light">Training images</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl font-light text-white mb-2">94.2%</div>
              <div className="text-gray-400 font-light">Diagnostic accuracy</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-5xl font-light text-white mb-2">2,847</div>
              <div className="text-gray-400 font-light">Test cases</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-white py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-light text-black mb-6">
              Ready to transform diagnostics?
            </h2>
            <p className="text-xl text-gray-600 font-light mb-12 max-w-2xl mx-auto">
              Join leading hospitals in Ghana pioneering AI-assisted radiology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-black text-white rounded-full font-light text-lg hover:bg-gray-800 transition-all hover:scale-105"
              >
                Request a Demo
              </Link>
              <Link
                href="/team"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gray-100 text-black rounded-full font-light text-lg hover:bg-gray-200 transition-all"
              >
                Meet the Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fullscreen Video Modal */}
      {isFullscreen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          onClick={() => setIsFullscreen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all group"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Video container */}
          <div className="w-full h-full max-w-7xl max-h-[90vh] p-8" onClick={(e) => e.stopPropagation()}>
            <video
              ref={fullscreenVideoRef}
              autoPlay
              controls
              loop
              className="w-full h-full object-contain rounded-2xl"
            >
              <source src="/images/video/vid.webm" type="video/webm" />
              <source src="/images/video/vid.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Instruction text */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm font-light">
            Click anywhere to close
          </div>
        </motion.div>
      )}
    </main>
  );
}
