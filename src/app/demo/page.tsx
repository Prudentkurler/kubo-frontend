'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

export default function DemoPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoad = () => setIsVideoLoaded(true);

    // Listen to multiple events to ensure we catch the video load
    video.addEventListener('loadeddata', handleLoad);
    video.addEventListener('canplay', handleLoad);
    video.addEventListener('canplaythrough', handleLoad);

    // Fallback: If video is already loaded or playable
    if (video.readyState >= 3) {
      setIsVideoLoaded(true);
    }

    // Safety fallback: Force show after 2 seconds
    const timeout = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 2000);

    return () => {
      video.removeEventListener('loadeddata', handleLoad);
      video.removeEventListener('canplay', handleLoad);
      video.removeEventListener('canplaythrough', handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <main className="bg-black">
      {/* Hero Section - Fullscreen Video Background */}
      <div ref={containerRef} className="relative h-[150vh]">
        <motion.section 
          style={{ opacity, scale }}
          className="sticky top-0 h-screen w-full overflow-hidden"
        >
          {/* Video Background */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src="/images/video/vid.webm" type="video/webm" />
            <source src="/images/video/vid.mp4" type="video/mp4" />
          </video>

          {/* Gradient Overlays for Cinematic Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
          
          {/* Vignette Effect */}
          <div className="absolute inset-0 bg-radial-gradient opacity-40" />

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
              className="text-center max-w-4xl"
            >
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                See KUBO in Action
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 font-light mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                Real-time chest X-ray analysis powered by AI
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-black rounded-full font-light text-lg hover:bg-gray-100 transition-all hover:scale-105"
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
              transition={{ duration: 1, delay: 1.5 }}
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

          {/* Loading Skeleton */}
          {!isVideoLoaded && (
            <div className="absolute inset-0 bg-black flex items-center justify-center">
              <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            </div>
          )}
        </motion.section>
      </div>

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
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
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
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
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
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
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
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clinical Validation Section - UGMC Background */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/workflow/ugmc.jpg)' }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80" />
        
        {/* Gradient Overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
              Validated through partnerships with Ghana&apos;s leading medical institutions including UGMC and Korle Bu Teaching Hospital
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-light text-white mb-2">12,450+</div>
              <div className="text-gray-300 font-light">Training images</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl font-light text-white mb-2">94.2%</div>
              <div className="text-gray-300 font-light">Diagnostic accuracy</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-5xl font-light text-white mb-2">2,847</div>
              <div className="text-gray-300 font-light">Test cases</div>
            </motion.div>
          </div>

          {/* Additional Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 text-center"
          >
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-white font-light">UGMC Validated</span>
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-white font-light">Korle Bu Partnership</span>
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-white font-light">DICOM Compatible</span>
            </div>
          </motion.div>
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
                className="px-8 py-4 bg-black text-white rounded-full font-light text-lg hover:bg-gray-800 transition-all hover:scale-105"
              >
                Request a Demo
              </Link>
              <Link
                href="/team"
                className="px-8 py-4 bg-gray-100 text-black rounded-full font-light text-lg hover:bg-gray-200 transition-all"
              >
                Meet the Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
