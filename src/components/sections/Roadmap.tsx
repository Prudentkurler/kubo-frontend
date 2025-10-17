'use client';

import { motion } from 'framer-motion';

interface RoadmapItem {
  id: string;
  quarter: string;
  year: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
}

interface RoadmapProps {
  items: RoadmapItem[];
}

export function Roadmap({ items }: RoadmapProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl font-light">
            From a university incubation program to hospital corridors. Building in the open, learning from clinicians, and earning trust one conversation at a time.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12">
          {items.map((item, index) => {
            const statusColors = {
              completed: 'bg-gray-900',
              'in-progress': 'bg-blue-600',
              planned: 'bg-gray-300'
            };

            const statusLabels = {
              completed: 'Completed',
              'in-progress': 'In Progress',
              planned: 'Planned'
            };

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-gray-200"
              >
                {/* Timeline dot */}
                <div className="absolute -left-1.5 top-1.5">
                  <div className={`w-3 h-3 rounded-full ${statusColors[item.status]}`} />
                </div>

                {/* Content */}
                <div className="pb-8">
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-sm font-normal text-gray-500">
                      {item.quarter} {item.year}
                    </span>
                    <span className={`text-xs font-normal ${
                      item.status === 'completed' ? 'text-gray-900' :
                      item.status === 'in-progress' ? 'text-blue-600' :
                      'text-gray-400'
                    }`}>
                      {statusLabels[item.status]}
                    </span>
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
