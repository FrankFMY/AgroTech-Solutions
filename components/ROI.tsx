"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { TrendingUp, Clock, Percent, Users } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: 24,
    suffix: "%",
    label: "Рост урожайности",
    description: "в среднем за первый сезон",
  },
  {
    icon: Percent,
    value: 18,
    suffix: "%",
    label: "Снижение расходов",
    description: "на ГСМ и удобрения",
  },
  {
    icon: Clock,
    value: 3,
    suffix: "x",
    label: "Скорость решений",
    description: "быстрее с аналитикой",
  },
  {
    icon: Users,
    value: 200,
    suffix: "+",
    label: "Хозяйств",
    description: "доверяют AgroTech",
  },
];

export default function ROI() {
  return (
    <section id="roi" className="py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <span className="inline-block text-green text-xs font-semibold uppercase tracking-widest mb-3">
            Результаты
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Цифры говорят за нас
          </h2>
          <p className="text-gray max-w-2xl mx-auto text-sm sm:text-base">
            Средние показатели клиентов AgroTech за первый год использования
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-60px" }}
              className="text-center bg-white rounded-2xl p-5 sm:p-6 border border-gray-border"
            >
              <div className="w-11 h-11 rounded-xl bg-green-light flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-5 h-5 text-green" />
              </div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm font-semibold mb-1">{stat.label}</p>
              <p className="text-xs text-gray">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial-style block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 bg-bg-alt rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-border"
        >
          <div className="max-w-3xl mx-auto text-center">
            <svg
              className="w-8 h-8 text-green/40 mx-auto mb-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.182 11 15c0 1.933-1.567 3.5-3.5 3.5-1.07 0-2.067-.48-2.917-1.179zM14.583 17.321C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.69 21 13.182 21 15c0 1.933-1.567 3.5-3.5 3.5-1.07 0-2.067-.48-2.917-1.179z" />
            </svg>
            <p className="text-base sm:text-lg text-dark-soft leading-relaxed mb-6">
              За первый сезон с AgroTech мы сократили потери зерна на 15% и
              оптимизировали маршруты техники — экономия на ГСМ составила 4.2
              млн тенге.
            </p>
            <div>
              <p className="text-sm font-semibold">Асхат Нурланов</p>
              <p className="text-xs text-gray">
                Директор ТОО «Астана-Агро», 12 000 га
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
