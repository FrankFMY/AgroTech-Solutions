"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

const problems = [
  {
    problem: "Потери урожая из-за несвоевременного полива и обработки",
    solution: "Автоматические алерты на основе данных с датчиков и спутников",
  },
  {
    problem: "Техника простаивает или ломается в разгар сезона",
    solution: "Предиктивное обслуживание и оптимизация маршрутов техники",
  },
  {
    problem: "Расходы растут, но непонятно куда уходят деньги",
    solution: "Прозрачная аналитика затрат по каждому полю и операции",
  },
  {
    problem: "Решения принимаются вслепую, по ощущениям",
    solution: "Дашборд с реальными данными и прогнозами на основе ИИ",
  },
];

export default function Problems() {
  return (
    <section id="problems" className="py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <span className="inline-block text-green text-xs font-semibold uppercase tracking-widest mb-3">
            Проблема → Решение
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Знакомые проблемы?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-60px" }}
              className="rounded-2xl border border-gray-border bg-white p-5 sm:p-6 hover:shadow-lg hover:shadow-green/5 transition-shadow duration-300"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                </div>
                <p className="text-sm text-dark-soft leading-relaxed">
                  {item.problem}
                </p>
              </div>
              <div className="flex items-start gap-3 pl-0 sm:pl-2">
                <div className="w-8 h-8 rounded-lg bg-green-light flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-green" />
                </div>
                <p className="text-sm text-gray leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
