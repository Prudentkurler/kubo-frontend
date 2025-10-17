'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
  author?: string;
  readTime?: string;
}

interface NewsPreviewProps {
  articles: NewsArticle[];
}

export function NewsPreview({ articles }: NewsPreviewProps) {
  const featuredArticle = articles[0];
  const sideArticles = articles.slice(1, 3);

  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      {/* Subtle gradient effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-4xl md:text-6xl font-light mb-4">
                Stories & Insights
              </h2>
              <p className="text-xl text-gray-400 font-light max-w-2xl">
                Behind-the-scenes of building AI for African healthcare
              </p>
            </div>
            <Link 
              href="/blog" 
              className="hidden md:flex items-center gap-2 text-white hover:text-gray-300 font-light transition-colors group border-b border-white/20 hover:border-white/60 pb-1"
            >
              All articles
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </motion.div>

        {/* Articles Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Article - Large */}
          {featuredArticle && (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:row-span-2 group cursor-pointer"
            >
              <Link href={`/blog/${featuredArticle.id}`} className="block h-full">
                <div className="relative h-full min-h-[500px] lg:min-h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                  {/* Image */}
                  {featuredArticle.image && (
                    <div className="absolute inset-0">
                      <Image
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        fill
                        className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-8 md:p-10">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-normal bg-white/10 backdrop-blur-md border border-white/20">
                        {featuredArticle.category}
                      </span>
                      <span className="text-sm text-gray-300 font-light">
                        {new Date(featuredArticle.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-light text-white mb-4 leading-tight group-hover:text-gray-200 transition-colors">
                      {featuredArticle.title}
                    </h3>

                    <p className="text-gray-300 font-light leading-relaxed mb-6 text-lg">
                      {featuredArticle.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm">
                      {featuredArticle.author && <span className="text-gray-400 font-light">{featuredArticle.author}</span>}
                      <span className="flex items-center gap-2 text-white font-light group-hover:gap-3 transition-all">
                        Read more
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          )}

          {/* Side Articles - Smaller */}
          <div className="space-y-8">
            {sideArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Link href={`/blog/${article.id}`} className="block">
                  <div className="flex gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    {/* Image */}
                    {article.image && (
                      <div className="relative w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-gray-800">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs text-gray-400 font-light">
                          {article.category}
                        </span>
                        <span className="text-gray-500">•</span>
                        <span className="text-xs text-gray-400 font-light">
                          {new Date(article.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </div>

                      <h3 className="text-lg font-normal text-white mb-2 leading-snug group-hover:text-gray-200 transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-gray-400 font-light text-sm leading-relaxed line-clamp-2 mb-3">
                        {article.excerpt}
                      </p>

                      {article.readTime && (
                        <span className="text-xs text-gray-500 font-light">{article.readTime}</span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Mobile "View All" Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center lg:hidden"
        >
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-white hover:text-gray-300 font-light transition-colors group border-b border-white/20 hover:border-white/60 pb-1"
          >
            All articles
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
