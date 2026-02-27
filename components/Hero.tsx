"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import DashboardMockup from "./DashboardMockup";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(22,163,74,0.08),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-green-light text-green-dark text-xs font-medium px-3 py-1.5 rounded-full mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
              Платформа для агробизнеса
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.15] mb-6"
            >
              Управляйте хозяйством{" "}
              <span className="text-green">на основе данных</span>, а не
              интуиции
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-gray text-base sm:text-lg leading-relaxed max-w-lg mb-8"
            >
              Мониторинг полей, управление техникой, аналитика урожайности и
              финансов — всё в одной платформе. Принимайте решения быстрее, теряйте меньше.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 bg-green hover:bg-green-dark text-white px-6 py-3.5 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-green/20"
              >
                Запросить демо
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 border border-gray-border hover:border-green/30 text-dark px-6 py-3.5 rounded-lg text-sm font-medium transition-colors"
              >
                <Play className="w-4 h-4" />
                Как это работает
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex items-center gap-6 mt-10"
            >
              <div className="flex -space-x-2">
                {[
                  "bg-green-dark",
                  "bg-green",
                  "bg-emerald-500",
                  "bg-teal-500",
                ].map((color, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${color} border-2 border-white flex items-center justify-center text-white text-[10px] font-bold`}
                  >
                    {["АК", "МС", "ИТ", "ДБ"][i]}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold">200+ хозяйств</p>
                <p className="text-xs text-gray">уже используют AgroTech</p>
              </div>
            </motion.div>
          </div>

          {/* Right — dashboard mockup */}
          <div className="flex justify-center lg:justify-end">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
