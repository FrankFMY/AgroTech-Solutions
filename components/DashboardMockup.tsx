"use client";

import { motion } from "framer-motion";

const barData = [35, 52, 41, 68, 55, 72, 60, 78, 65, 85, 74, 90];
const months = [
  "Янв",
  "Фев",
  "Мар",
  "Апр",
  "Май",
  "Июн",
  "Июл",
  "Авг",
  "Сен",
  "Окт",
  "Ноя",
  "Дек",
];

const linePoints = [
  { x: 0, y: 70 },
  { x: 30, y: 55 },
  { x: 60, y: 62 },
  { x: 90, y: 40 },
  { x: 120, y: 48 },
  { x: 150, y: 30 },
  { x: 180, y: 35 },
  { x: 210, y: 20 },
  { x: 240, y: 25 },
  { x: 270, y: 12 },
];

const pathD = linePoints
  .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
  .join(" ");

export default function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateY: -8 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="relative w-full max-w-xl"
      style={{ perspective: "1200px" }}
    >
      <div className="bg-white rounded-2xl shadow-2xl shadow-green/10 border border-gray-border overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-border bg-gray-bg">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green" />
          </div>
          <span className="text-xs text-gray ml-2">
            dashboard.agrotech.kz
          </span>
        </div>

        <div className="p-4 sm:p-5">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5">
            {[
              { label: "Урожайность", value: "4.2 т/га", change: "+12%" },
              { label: "Техника", value: "87%", change: "онлайн" },
              { label: "Прибыль", value: "₸2.4М", change: "+24%" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.15 }}
                className="bg-bg rounded-xl p-2 sm:p-3"
              >
                <p className="text-[10px] sm:text-xs text-gray mb-1">
                  {stat.label}
                </p>
                <p className="text-sm sm:text-base font-bold">{stat.value}</p>
                <p className="text-[10px] text-green font-medium">
                  {stat.change}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Chart area */}
          <div className="bg-bg rounded-xl p-3 sm:p-4 mb-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold">Урожайность по месяцам</p>
              <div className="flex gap-3">
                <span className="flex items-center gap-1 text-[10px] text-gray">
                  <span className="w-2 h-2 rounded-full bg-green" />
                  2025
                </span>
                <span className="flex items-center gap-1 text-[10px] text-gray">
                  <span className="w-2 h-2 rounded-full bg-green/30" />
                  2024
                </span>
              </div>
            </div>

            <div className="flex items-end gap-1 sm:gap-1.5 h-24 sm:h-28">
              {barData.map((value, i) => (
                <div
                  key={i}
                  className="flex-1 flex flex-col items-center gap-1"
                >
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${value}%` }}
                    transition={{ delay: 1 + i * 0.06, duration: 0.5 }}
                    className="w-full rounded-t-sm bg-green/80"
                  />
                  <span className="text-[7px] sm:text-[8px] text-gray leading-none">
                    {months[i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Line chart + list */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            <div className="sm:col-span-3 bg-bg rounded-xl p-3">
              <p className="text-xs font-semibold mb-2">Расходы на ГСМ</p>
              <svg
                viewBox="0 0 270 80"
                className="w-full h-12 sm:h-14"
                fill="none"
              >
                <motion.path
                  d={pathD}
                  stroke="#16A34A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.4, duration: 1.2 }}
                />
                <path
                  d={`${pathD} L 270 80 L 0 80 Z`}
                  fill="url(#lineGrad)"
                  opacity="0.15"
                />
                <defs>
                  <linearGradient
                    id="lineGrad"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="80"
                  >
                    <stop stopColor="#16A34A" />
                    <stop offset="1" stopColor="#16A34A" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="sm:col-span-2 bg-bg rounded-xl p-3">
              <p className="text-xs font-semibold mb-2">Задачи</p>
              <div className="space-y-1.5">
                {["Полив поле №3", "ТО трактор K-744", "Отгрузка зерна"].map(
                  (task, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <div
                        className={`w-2 h-2 rounded-full shrink-0 ${
                          i === 0
                            ? "bg-green"
                            : i === 1
                              ? "bg-yellow-400"
                              : "bg-gray-light"
                        }`}
                      />
                      <span className="text-[9px] sm:text-[10px] text-gray truncate">
                        {task}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glow behind */}
      <div className="absolute -inset-4 bg-green/5 rounded-3xl -z-10 blur-2xl" />
    </motion.div>
  );
}
