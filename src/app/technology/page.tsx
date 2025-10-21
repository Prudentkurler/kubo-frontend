'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';

export default function TechnologyPage() {
  return (
    <main className="bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-black text-white pt-32 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-light mb-8 border border-white/20"
            >
              Powered by MedGemma AI
            </motion.div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight mb-8 text-white leading-[1.1] tracking-tight">
              AI That Measures.
              <br />
              <span className="text-gray-400">Radiologists Who Verify.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
              A complete AI-assisted radiology platform built for African healthcare—from multimodal diagnosis 
              to report generation, with precision tools for clinical verification.
            </p>
          </motion.div>
        </div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* How It Works - Process Flow */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-black mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              A streamlined workflow designed with radiologists, for radiologists
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-black text-white flex items-center justify-center text-2xl font-light">
                1
              </div>
              <h3 className="text-lg font-normal text-black mb-2">Upload X-ray</h3>
              <p className="text-sm text-gray-600 font-light">
                Radiologist uploads chest X-ray in DICOM or standard formats
              </p>
            </motion.div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center pt-8">
              <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-black text-white flex items-center justify-center text-2xl font-light">
                2
              </div>
              <h3 className="text-lg font-normal text-black mb-2">AI Analysis</h3>
              <p className="text-sm text-gray-600 font-light">
                Deep learning detects 14+ abnormalities with confidence scores and heatmaps
              </p>
            </motion.div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center pt-8">
              <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-black text-white flex items-center justify-center text-2xl font-light">
                3
              </div>
              <h3 className="text-lg font-normal text-black mb-2">CTR Check</h3>
              <p className="text-sm text-gray-600 font-light">
                Auto-calculates Cardiothoracic Ratio with manual verification tools
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start mt-8">
            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-black text-white flex items-center justify-center text-2xl font-light">
                4
              </div>
              <h3 className="text-lg font-normal text-black mb-2">Verify & Adjust</h3>
              <p className="text-sm text-gray-600 font-light">
                Use rulers, grid lines, and precision tools to confirm measurements
              </p>
            </motion.div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center pt-8">
              <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>

            {/* Step 5 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-black text-white flex items-center justify-center text-2xl font-light">
                5
              </div>
              <h3 className="text-lg font-normal text-black mb-2">Generate Report</h3>
              <p className="text-sm text-gray-600 font-light">
                Professional radiology report generated instantly, ready for patient records
              </p>
            </motion.div>

            {/* Empty columns for alignment */}
            <div className="hidden md:block"></div>
            <div className="hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Multimodal AI Capabilities Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-light mb-6 border border-gray-200">
              Powered by MedGemma
            </div>
            <h2 className="text-5xl md:text-6xl font-extralight text-black mb-6 tracking-tight">
              One AI, Multiple Inputs
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              MedGemma is multimodal—analyzing combinations of text, images, CT scans, and MRI data 
              simultaneously for comprehensive diagnostics
            </p>
          </motion.div>

          {/* Three Modality Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            
            {/* Text Input */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 rounded-3xl p-10 border border-gray-200 hover:border-gray-300 transition-all group"
            >
              <div className="w-14 h-14 mb-6 rounded-2xl bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4 text-black">
                Clinical Text
              </h3>
              <p className="text-gray-600 mb-6 font-light leading-relaxed">
                Process medical history, symptoms, clinical notes, and referral documents
              </p>
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <p className="text-sm text-gray-500 font-light italic leading-relaxed">
                  "Patient complaints, referral notes, previous diagnosis history"
                </p>
              </div>
            </motion.div>

            {/* Standard Imaging */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-3xl p-10 border border-gray-200 hover:border-gray-300 transition-all group"
            >
              <div className="w-14 h-14 mb-6 rounded-2xl bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4 text-black">
                X-Rays & Images
              </h3>
              <p className="text-gray-600 mb-6 font-light leading-relaxed">
                Chest X-rays, standard radiographs, and 2D medical imaging
              </p>
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <p className="text-sm text-gray-500 font-light italic leading-relaxed">
                  "Chest X-rays with automated CTR measurement and abnormality detection"
                </p>
              </div>
            </motion.div>

            {/* Advanced Imaging */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-50 rounded-3xl p-10 border border-gray-200 hover:border-gray-300 transition-all group"
            >
              <div className="w-14 h-14 mb-6 rounded-2xl bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4 text-black">
                CT & MRI Scans
              </h3>
              <p className="text-gray-600 mb-6 font-light leading-relaxed">
                3D volumetric analysis of CT scans, MRI sequences, and complex imaging
              </p>
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <p className="text-sm text-gray-500 font-light italic leading-relaxed">
                  "CT chest scans, brain MRI sequences, multi-slice analysis"
                </p>
              </div>
            </motion.div>

          </div>

          {/* Why Multimodal Matters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-black rounded-3xl p-12 md:p-16 text-white"
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-4xl md:text-5xl font-extralight mb-6 tracking-tight">Why Multimodal AI Matters</h3>
              <p className="text-xl font-light leading-relaxed mb-12 text-gray-300">
                Our AI doesn't just analyze images in isolation—it understands the full clinical context 
                by combining multiple data sources. This leads to more accurate diagnostics, fewer false 
                positives, and better support for complex cases.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="border-l-2 border-white/20 pl-6">
                  <div className="text-5xl font-extralight mb-3 text-white">+12%</div>
                  <p className="text-base text-gray-400 font-light">Accuracy improvement with multimodal analysis</p>
                </div>
                <div className="border-l-2 border-white/20 pl-6">
                  <div className="text-5xl font-extralight mb-3 text-white">3x</div>
                  <p className="text-base text-gray-400 font-light">Faster diagnosis with combined inputs</p>
                </div>
                <div className="border-l-2 border-white/20 pl-6">
                  <div className="text-5xl font-extralight mb-3 text-white">-40%</div>
                  <p className="text-base text-gray-400 font-light">Reduction in false positive rates</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Supported Formats */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 font-light mb-6 text-sm uppercase tracking-wide">Supported Formats</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['DICOM', 'JPEG', 'PNG', 'NIfTI', 'NRRD', 'PDF (Reports)'].map((format) => (
                <span key={format} className="px-5 py-2.5 bg-gray-100 border border-gray-200 rounded-full text-sm text-gray-700 font-light hover:bg-gray-200 transition-colors">
                  {format}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Diagnostics Engine */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
                AI Diagnostics Engine
              </h2>
              <p className="text-xl text-gray-300 font-light leading-relaxed mb-8">
                Our deep learning models analyze chest X-rays in real-time, detecting abnormalities 
                with clinically validated accuracy. Trained on 12,450+ diverse images from African 
                patient populations.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-normal mb-2 text-white">Detection Capabilities</h3>
                  <p className="text-gray-300 font-light">
                    14+ chest abnormalities including pneumonia, tuberculosis, cardiomegaly, 
                    pleural effusion, and more
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-normal mb-2 text-white">Processing Speed</h3>
                  <p className="text-gray-300 font-light">
                    2.3 seconds average analysis time from upload to results
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-normal mb-2 text-white">Explainability</h3>
                  <p className="text-gray-300 font-light">
                    Confidence scores and heatmap overlays show exactly where the AI detected findings
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-normal mb-2 text-white">Clinical Validation</h3>
                  <p className="text-gray-300 font-light">
                    94.2% accuracy validated through partnerships with UGMC and Korle Bu radiologists
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gray-900 overflow-hidden">
                <Image
                  src="/images/features/chest-xray.jpg"
                  alt="AI Analysis with Heatmap"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-light">Pneumonia Detection</span>
                  <span className="text-sm font-light text-green-400">92.4% Confidence</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{ width: '92.4%' }} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTR Measurement Feature */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-black mb-4">
              Precision CTR Measurement
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Automatic Cardiothoracic Ratio calculation with professional verification tools
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-light text-black mb-6">Automatic CTR Calculation</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                KUBO automatically identifies cardiac and thoracic boundaries, calculates the 
                Cardiothoracic Ratio, and flags potential cardiomegaly (CTR &gt; 0.5). The AI 
                handles the initial measurement, saving valuable time.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-black mt-2" />
                  <div>
                    <h4 className="font-normal text-black mb-1">Boundary Detection</h4>
                    <p className="text-sm text-gray-600 font-light">
                      AI identifies heart and chest wall boundaries with precision
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-black mt-2" />
                  <div>
                    <h4 className="font-normal text-black mb-1">Ratio Calculation</h4>
                    <p className="text-sm text-gray-600 font-light">
                      Automatic width measurements and CTR computation
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-black mt-2" />
                  <div>
                    <h4 className="font-normal text-black mb-1">Visual Overlay</h4>
                    <p className="text-sm text-gray-600 font-light">
                      Measurement lines displayed directly on the X-ray image
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-light text-black mb-6">Manual Verification Tools</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                A dedicated verification panel gives radiologists complete control to confirm or 
                adjust AI measurements using professional-grade tools.
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-normal text-black mb-1">Digital Rulers</h4>
                    <p className="text-sm text-gray-600 font-light">
                      Precision calipers for manual measurements
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-normal text-black mb-1">Grid Lines</h4>
                    <p className="text-sm text-gray-600 font-light">
                      Overlay grids for alignment and accuracy
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-normal text-black mb-1">Zoom Controls</h4>
                    <p className="text-sm text-gray-600 font-light">
                      Pixel-level precision for detailed inspection
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-normal text-black mb-1">Adjustment Markers</h4>
                    <p className="text-sm text-gray-600 font-light">
                      Drag boundary points to refine measurements
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-black text-white rounded-2xl p-8 md:p-12 text-center"
          >
            <h3 className="text-2xl font-light mb-4 text-white">Why CTR Matters</h3>
            <p className="text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
              The Cardiothoracic Ratio is a fundamental measurement in cardiology screening. 
              By automating the initial calculation while giving radiologists full control to verify, 
              KUBO saves time without sacrificing clinical accuracy or professional judgment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Report Generation */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-sm font-normal text-gray-500">PLAIN RADIOGRAPH – CHEST REPORT</h4>
                  <span className="text-xs text-gray-400">Auto-generated</span>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <h5 className="font-normal text-black mb-2">Findings:</h5>
                    <p className="text-gray-600 font-light leading-relaxed">
                      There is a homogeneous opacity in the right lower lobe obscuring the right heart border.<br/>
                      The rest of the lung fields are clear. The left hila, cardio- and costophrenic angle are normal.<br/>
                      The heart has a normal size and shape. CTR is 0.48<br/>
                      The trachea is central and has a normal calibre.<br/>
                      The large airways show normal calibre.<br/>
                      The soft tissues and bony thorax are normal.<br/>
                      The outlines of the hemidiaphragms are normal.<br/>
                      There is no pleural effusion or pneumothorax.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-normal text-black mb-2">AI Confidence:</h5>
                    <p className="text-gray-600 font-light">
                      Pneumonia: 92.4% • Normal CTR: 95.1% • No effusion: 98.3%
                    </p>
                  </div>
                  <div className="pt-2 border-t border-gray-100">
                    <h5 className="font-normal text-black mb-1">IMPRESSION:</h5>
                    <p className="text-gray-600 font-light">
                      Right lower lobe pneumonia
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
              Professional Report Generation
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
              Transform AI insights into structured clinical reports following standard chest X-ray 
              reporting guidelines. Every finding, CTR measurement, and anatomical assessment is 
              organized into professional radiology reports ready for patient records.
            </p>              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-black mt-2" />
                  <div>
                    <h4 className="font-normal text-black mb-1">Standard Format</h4>
                    <p className="text-sm text-gray-600 font-light">
                      Follows chest X-ray reporting guidelines: lung fields, heart, CTR, airways, soft tissues, impression
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-black mt-2" />
                  <div>
                    <h4 className="font-normal text-black mb-1">CTR Classification</h4>
                    <p className="text-sm text-gray-600 font-light">
                      Automatic classification: Normal (0.40-0.51), Mild (0.52-0.55), Moderate (0.55-0.60), Massive (0.61+)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-black mt-2" />
                  <div>
                    <h4 className="font-normal text-black mb-1">Anatomical Coverage</h4>
                    <p className="text-sm text-gray-600 font-light">
                      Systematic assessment of hila, angles, trachea, airways, diaphragms, soft tissues, bony thorax
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-black mt-2" />
                  <div>
                    <h4 className="font-normal text-black mb-1">Time Savings</h4>
                    <p className="text-sm text-gray-600 font-light">
                      15-20 minutes saved per report with accurate structured findings
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Platform Features */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-black mb-4">
              Complete Platform Features
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Beyond AI diagnosis—a comprehensive ecosystem for modern radiology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Secure Messaging */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-black mb-4">Secure Messaging</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                End-to-end encrypted clinician chat for case collaboration. Share findings, 
                request second opinions, and coordinate care—all within the platform.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600 font-light">
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                  HIPAA-compliant messaging
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 font-light">
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                  Share X-rays and reports instantly
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 font-light">
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                  Integrated with patient records
                </li>
              </ul>
            </motion.div>

            {/* Video Appointments */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-black mb-4">Video Appointments</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Built-in telehealth platform connects specialists with patients anywhere in Ghana. 
                Conduct consultations, share diagnostic images, and provide expert care remotely.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600 font-light">
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                  Schedule directly from platform
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 font-light">
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                  Share X-rays during consultation
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 font-light">
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                  Bridge urban-rural healthcare gap
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-white">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
              Enterprise-grade infrastructure built for healthcare
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-normal mb-4 text-white">Integration</h3>
              <ul className="space-y-2 text-gray-300 font-light">
                <li>DICOM-compliant imaging</li>
                <li>PACS system integration</li>
                <li>FHIR-compatible data exchange</li>
                <li>HL7 messaging support</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-normal mb-4 text-white">Deployment</h3>
              <ul className="space-y-2 text-gray-300 font-light">
                <li>Cloud-hosted (AWS, Azure, GCP)</li>
                <li>On-premise installation available</li>
                <li>Hybrid deployment options</li>
                <li>Docker containerization</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-normal mb-4 text-white">Security & Compliance</h3>
              <ul className="space-y-2 text-gray-300 font-light">
                <li>HIPAA-compliant infrastructure</li>
                <li>End-to-end encryption (AES-256)</li>
                <li>Role-based access control</li>
                <li>Audit logging and monitoring</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-normal mb-4 text-white">Performance</h3>
              <ul className="space-y-2 text-gray-300 font-light">
                <li>2.3s average processing time</li>
                <li>99.9% uptime SLA</li>
                <li>Scalable to 10,000+ studies/day</li>
                <li>CDN-accelerated delivery</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-xl font-normal mb-4 text-white">Data Management</h3>
              <ul className="space-y-2 text-gray-300 font-light">
                <li>Automatic backup and recovery</li>
                <li>Data sovereignty compliance</li>
                <li>Configurable retention policies</li>
                <li>Export capabilities</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-xl font-normal mb-4 text-white">Support & Training</h3>
              <ul className="space-y-2 text-gray-300 font-light">
                <li>24/7 technical support</li>
                <li>Onboarding and training</li>
                <li>Clinical validation assistance</li>
                <li>Regular feature updates</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clinical Validation */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-black mb-4">
              Validated in Real Clinical Settings
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Built and tested in partnership with Ghana's leading medical institutions
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
              <div className="text-5xl font-light text-black mb-2">94.2%</div>
              <div className="text-gray-600 font-light">Diagnostic Accuracy</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl font-light text-black mb-2">12,450+</div>
              <div className="text-gray-600 font-light">Training Images</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-5xl font-light text-black mb-2">2,847</div>
              <div className="text-gray-600 font-light">Test Cases</div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-light text-black mb-4">UGMC Partnership</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                Presented to radiologists at the University of Ghana Medical Centre's radiology 
                conference. Their feedback directly shaped our explainability features and CTR 
                verification tools.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm text-gray-700 font-light">Completed Q3 2024</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-light text-black mb-4">Korle Bu Collaboration</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                Ongoing partnership with radiologists at Ghana's largest teaching hospital. 
                Working together to ensure KUBO meets the real-world needs of busy radiology 
                departments.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-sm text-gray-700 font-light">Active Partnership</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-32 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
              Why This Matters
            </h2>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-8">
              Ghana has only 93 registered radiologists (2023 survey) serving a population of 32 million. 
              KUBO doesn't replace radiologists—it amplifies their expertise, helping them 
              serve more patients with greater confidence and efficiency.
            </p>
            <p className="text-lg text-gray-400 font-light">
              Built with African clinicians, for African healthcare.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
              Ready to See It in Action?
            </h2>
            <p className="text-xl text-gray-600 font-light mb-12 max-w-2xl mx-auto">
              Schedule a technical demo or request our clinical validation whitepaper
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-black text-white rounded-full font-light text-lg hover:bg-gray-800 transition-all hover:scale-105"
              >
                View Demo
              </Link>
              <Link
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gray-100 text-black rounded-full font-light text-lg hover:bg-gray-200 transition-all"
              >
                Request Whitepaper
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
