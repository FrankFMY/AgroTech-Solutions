"use client";

import { motion } from "framer-motion";
import {
  Satellite,
  Tractor,
  BarChart3,
  Cloud,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Satellite,
    title: "Спутниковый мониторинг",
    description:
      "Отслеживайте состояние полей по NDVI-индексам. Получайте данные со спутников каждые 3 дня.",
  },
  {
    icon: Tractor,
    title: "Управление техникой",
    description:
      "GPS-трекинг, расход топлива, график ТО. Вся техника на одной карте в реальном времени.",
  },
  {
    icon: BarChart3,
    title: "Финансовая аналитика",
    description:
      "Себестоимость продукции по полям, прогноз прибыли, контроль расходов на каждом этапе.",
  },
  {
    icon: Cloud,
    title: "Метеоданные",
    description:
      "Прогноз погоды с точностью до поля. Уведомления о заморозках, осадках и ветре.",
  },
  {
    icon: MapPin,
    title: "Карта полей",
    description:
      "Контуры полей с привязкой к кадастру. История операций и урожайности по каждому участку.",
  },
  {
    icon: ShieldCheck,
    title: "Безопасность данных",
    description:
      "Шифрование, резервное копирование, разграничение доступа. Ваши данные под защитой.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 px-6 bg-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <span className="inline-block text-green text-xs font-semibold uppercase tracking-widest mb-3">
            Возможности
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Всё, что нужно для управления
          </h2>
          <p className="text-gray max-w-2xl mx-auto text-sm sm:text-base">
            Шесть модулей, которые закрывают полный цикл — от посева до продажи
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true, margin: "-60px" }}
              className="group bg-white rounded-2xl p-5 sm:p-6 border border-gray-border hover:border-green/30 hover:shadow-lg hover:shadow-green/5 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-green-light flex items-center justify-center mb-4 group-hover:bg-green group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-5 h-5 text-green group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
