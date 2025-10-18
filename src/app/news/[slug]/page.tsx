'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/sections/Navbar';
import contentData from '@/data/content.json';
import { notFound } from 'next/navigation';

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = contentData.news.find(a => a.id === params.slug);
  
  if (!article) {
    notFound();
  }

  // Get related articles (other articles in the same category or just other articles)
  const relatedArticles = contentData.news
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 2);

  // Article content - in a real app, this would come from a CMS or markdown files
  const getArticleContent = (articleId: string) => {
    switch (articleId) {
      case 'korlebu-collaboration':
        return {
          sections: [
            {
              heading: "The Reality Check We Needed",
              content: "When we first walked into Korle Bu Teaching Hospital's radiology department, we thought we had answers. We'd built an AI model, seen impressive accuracy numbers, and were ready to revolutionize chest X-ray interpretation. The radiologists were polite. They listened. Then they showed us why our solution, as impressive as it looked in our tests, wouldn't work in their daily reality."
            },
            {
              heading: "What They Actually Needed",
              content: "Dr. Asante, a senior radiologist with 15 years of experience, pulled up a typical morning's workload: 47 chest X-rays waiting for interpretation. 'Your AI gives me probabilities,' he said. 'But I need measurements. I need to document the Cardiothoracic Ratio. I need to describe the exact location of infiltrates. I need language that goes into a medical record and gets reviewed by cardiologists and pulmonologists.'"
            },
            {
              heading: "The CTR Revelation",
              content: "This conversation led to one of our most important features: the CTR measurement tool with manual verification. The radiologists explained that while AI could flag potential cardiomegaly, they still needed to measure and document the ratio themselves. So we built both: automatic calculation to save time, and precision tools (rulers, grid lines, zoom controls) to verify and adjust. That's what 'AI-assisted' really means—the AI does the heavy lifting, but the clinician stays in control."
            },
            {
              heading: "Building in Partnership",
              content: "We meet with the Korle Bu team every two weeks. They test features. They break things. They tell us what's missing. This partnership has fundamentally shaped KUBO—from the report generation format to the explainability features to the entire workflow design. We're not building AI for radiologists. We're building it with them."
            },
            {
              heading: "What This Means for KUBO",
              content: "Every feature you see in KUBO—the heatmaps, the CTR tools, the structured reports—exists because a radiologist told us they needed it. Our accuracy metrics matter, but clinical utility matters more. We're grateful to the Korle Bu team for their honesty, their time, and their belief that AI can genuinely help if we're willing to listen and build the right way."
            }
          ]
        };
      
      case 'ugmc-lessons':
        return {
          sections: [
            {
              heading: "Our First Real Presentation",
              content: "September 2024. The University of Ghana Medical Centre's radiology conference. We had 20 minutes to present KUBO to a room full of radiologists, medical students, and hospital administrators. We were nervous. We should have been terrified."
            },
            {
              heading: "The Questions That Humbled Us",
              content: "'What happens when your model sees an X-ray with rotation?' one radiologist asked. We paused. We hadn't specifically tested for that. 'How do you handle pediatric cases?' another asked. Our training data was predominantly adults. 'Can I export these reports to our EMR system?' We had built a beautiful interface but hadn't thought deeply enough about integration."
            },
            {
              heading: "The Feedback That Shaped Us",
              content: "But here's what surprised us: they weren't dismissing the technology. They were stress-testing it because they wanted it to work. 'If you can measure CTR automatically, that saves me 2-3 minutes per film,' one radiologist noted. 'That's 90 minutes a day. That's seeing 15-20 more patients.' The potential was clear. So were the gaps."
            },
            {
              heading: "What We Changed",
              content: "After UGMC, we added robustness testing for image quality variations. We clearly documented our model's limitations (adult chest X-rays, specific pathologies). We built export functionality. We added the explainability features—heatmaps and confidence scores—because radiologists told us they needed to understand why the AI flagged something. Most importantly, we accepted that 'AI-assisted' means the human expert must always be able to override, verify, and control the final decision."
            },
            {
              heading: "Gratitude",
              content: "To the UGMC radiologists who took time from their schedules to attend our demo, ask hard questions, and provide honest feedback: thank you. You made KUBO better. You made us better builders. This is exactly how healthcare AI should be developed—in conversation with the people who will actually use it."
            }
          ]
        };
      
      case 'journey-begins':
        return {
          sections: [
            {
              heading: "It Started at UNICERF",
              content: "The University of Ghana's innovation center, UNICERF, is where most student projects go to die. That's not cynicism—it's statistics. Enthusiasm meets reality. Ideas meet execution. Teams dissolve. But some stick. We stuck."
            },
            {
              heading: "The Problem Was Personal",
              content: "One team member's grandmother waited six weeks for a chest X-ray interpretation at a regional hospital. Not because the X-ray wasn't taken—it was. But because there was no radiologist available to read it. When the report finally came, it showed early-stage pneumonia that had progressed to something more serious. That's when we understood: Ghana's radiologist shortage isn't an abstract healthcare statistic. It's someone's grandmother waiting for an answer that should have taken hours, not weeks."
            },
            {
              heading: "Why AI? Why Now?",
              content: "Ghana has 93 registered radiologists for 32 million people. Kenya has fewer than 100 for 54 million. Deep learning models can now analyze chest X-rays with accuracy approaching or exceeding human experts. The technology exists. The need is desperate. The question isn't 'why AI?'—it's 'why hasn't someone already done this for Africa?'"
            },
            {
              heading: "The Honest Truth About Building AI for Healthcare",
              content: "It's harder than we thought. The accuracy numbers we celebrate in research papers matter less than whether a tired radiologist at 11 PM trusts the model enough to use it. Integration with hospital systems is messier than any tutorial teaches. Regulatory pathways are unclear. Funding is scarce. And every single day, we're aware that if we get this wrong, we're not just shipping buggy software—we're risking patient outcomes."
            },
            {
              heading: "Why We Keep Going",
              content: "Because the alternative is inaction. Because our hospital partners believe this can work. Because the technology is ready, even if the ecosystem isn't. And because someone's grandmother shouldn't wait six weeks for an X-ray interpretation in 2024. We're building KUBO carefully, transparently, and in partnership with the clinicians who know what's actually needed. This is the beginning. We're committed to seeing it through."
            }
          ]
        };
      
      default:
        return {
          sections: [
            {
              heading: "Article Content",
              content: "This article is currently being written. Check back soon for updates."
            }
          ]
        };
    }
  };

  const content = getArticleContent(article.id);

  return (
    <main className="bg-white">
      <Navbar />

      {/* Article Hero */}
      <article>
        <header className="relative bg-black text-white py-20 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Category Badge */}
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-light rounded-full border border-white/20">
                  {article.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-white leading-tight">
                {article.title}
              </h1>

              {/* Metadata */}
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <span>{article.author}</span>
                <span>•</span>
                <span>{new Date(article.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Article Content */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <p className="text-xl text-gray-700 font-light leading-relaxed">
                {article.excerpt}
              </p>
            </motion.div>

            {/* Article Sections */}
            {content.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-light text-black mb-4">
                  {section.heading}
                </h2>
                <p className="text-gray-700 font-light leading-relaxed text-lg">
                  {section.content}
                </p>
              </motion.div>
            ))}

            {/* Divider */}
            <div className="border-t border-gray-200 my-16" />

            {/* Back to News */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors font-light"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to News
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
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
                  Related Articles
                </h2>
                <p className="text-gray-600 font-light">
                  More from our journey
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedArticles.map((relatedArticle, index) => (
                  <motion.div
                    key={relatedArticle.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link
                      href={`/news/${relatedArticle.id}`}
                      className="group block bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full"
                    >
                      <div className="relative h-48 overflow-hidden bg-gray-200">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 group-hover:scale-105 transition-transform duration-500">
                          <div className="w-full h-full flex items-center justify-center text-gray-500 text-2xl">
                            📄
                          </div>
                        </div>
                        <div className="absolute top-4 left-4">
                          <span className="inline-block px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-xs font-light rounded-full">
                            {relatedArticle.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                          <span>{new Date(relatedArticle.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}</span>
                          <span>•</span>
                          <span>{relatedArticle.readTime}</span>
                        </div>

                        <h3 className="text-xl font-light text-black mb-3 group-hover:text-gray-700 transition-colors">
                          {relatedArticle.title}
                        </h3>

                        <p className="text-gray-600 font-light text-sm leading-relaxed line-clamp-2">
                          {relatedArticle.excerpt}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
