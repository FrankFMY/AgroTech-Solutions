"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="demo" className="py-20 md:py-28 px-6 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <span className="inline-block text-green text-xs font-semibold uppercase tracking-widest mb-3">
              Начать
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Запросите персональное демо
            </h2>
            <p className="text-gray text-sm sm:text-base leading-relaxed mb-8">
              Наш специалист покажет платформу на примере вашего хозяйства.
              Подключение за 1 день, обучение команды — бесплатно.
            </p>

            <div className="space-y-4">
              {[
                "Персональная демонстрация 30 минут",
                "Настройка под ваше хозяйство",
                "14 дней бесплатного доступа",
                "Обучение команды включено",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-light flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-green" />
                  </div>
                  <span className="text-sm text-dark-soft">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            {!submitted ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-border shadow-lg shadow-green/5"
              >
                <h3 className="text-lg font-semibold mb-6">
                  Заполните форму
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">
                      Имя
                    </label>
                    <input
                      type="text"
                      placeholder="Как вас зовут?"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-border text-sm placeholder:text-gray-light focus:outline-none focus:border-green focus:ring-1 focus:ring-green/20 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5">
                      Компания
                    </label>
                    <input
                      type="text"
                      placeholder="Название хозяйства или компании"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-border text-sm placeholder:text-gray-light focus:outline-none focus:border-green focus:ring-1 focus:ring-green/20 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-border text-sm placeholder:text-gray-light focus:outline-none focus:border-green focus:ring-1 focus:ring-green/20 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5">
                      Площадь угодий
                    </label>
                    <select
                      required
                      defaultValue=""
                      className="w-full pl-4 pr-10 py-3 rounded-lg border border-gray-border text-sm text-dark focus:outline-none focus:border-green focus:ring-1 focus:ring-green/20 transition-colors appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2394A3B8%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_12px_center] bg-no-repeat"
                    >
                      <option value="" disabled>
                        Выберите площадь
                      </option>
                      <option>до 1 000 га</option>
                      <option>1 000 — 5 000 га</option>
                      <option>5 000 — 20 000 га</option>
                      <option>более 20 000 га</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 bg-green hover:bg-green-dark text-white py-3.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-green/20"
                >
                  <Send className="w-4 h-4" />
                  Запросить демо
                </button>

                <p className="text-[11px] text-gray text-center mt-3">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-8 sm:p-10 border border-green/30 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-light flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-8 h-8 text-green" />
                </div>
                <h3 className="text-xl font-bold mb-2">Заявка отправлена!</h3>
                <p className="text-gray text-sm leading-relaxed">
                  Наш менеджер свяжется с вами в течение 2 рабочих часов для
                  согласования времени демонстрации.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
