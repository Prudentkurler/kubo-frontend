'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import contentData from '@/data/content.json';

export default function NewsPage() {
  const articles = contentData.news;
  const featuredArticle = articles[0]; // Most recent article
  const otherArticles = articles.slice(1);

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
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight mb-8 text-white leading-[1.1] tracking-tight">
              Building in the Open
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
              Updates, insights, and lessons learned from our journey to improve 
              radiology access across Africa. Real stories from real hospitals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href={`/news/${featuredArticle.id}`}
              className="group block bg-gray-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-80 lg:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 group-hover:scale-105 transition-transform duration-500">
                    {/* Placeholder for featured image */}
                    <div className="w-full h-full flex items-center justify-center text-gray-500 text-4xl">
                      📰
                    </div>
                  </div>
                  <div className="absolute top-6 left-6">
                    <span className="inline-block px-4 py-2 bg-black/80 backdrop-blur-sm text-white text-sm font-light rounded-full">
                      {featuredArticle.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span>{new Date(featuredArticle.date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}</span>
                    <span>•</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-light text-black mb-4 group-hover:text-gray-700 transition-colors">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-gray-600 font-light text-lg leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="inline-flex items-center gap-2 text-black font-normal group-hover:gap-4 transition-all">
                    Read article
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* More Articles Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-black mb-2">
              More Updates
            </h2>
            <p className="text-gray-600 font-light">
              Honest reflections from our journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={`/news/${article.id}`}
                  className="group block bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-gray-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 group-hover:scale-105 transition-transform duration-500">
                      {/* Placeholder */}
                      <div className="w-full h-full flex items-center justify-center text-gray-500 text-3xl">
                        📄
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-xs font-light rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span>{new Date(article.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="text-2xl font-light text-black mb-3 group-hover:text-gray-700 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 font-light leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="inline-flex items-center gap-2 text-sm text-black font-normal group-hover:gap-3 transition-all">
                      Read more
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
              Want to Follow Our Journey?
            </h2>
            <p className="text-xl text-gray-300 font-light mb-12 max-w-2xl mx-auto">
              We're committed to transparency. Connect with us to hear about our progress, 
              challenges, and learnings as we build.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-black rounded-full font-light text-lg hover:bg-gray-100 transition-all hover:scale-105"
              >
                Get in Touch
              </Link>
              <Link
                href="/team"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-light text-lg hover:bg-white/20 transition-all border border-white/20"
              >
                Meet the Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
