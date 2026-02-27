"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md bg-green flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 20h10" />
                  <path d="M10 20c5.5-2.5 8-6.5 8-12a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1c0 5.5 2.5 9.5 8 12" />
                </svg>
              </div>
              <span className="text-base font-bold tracking-tight">
                Agro<span className="text-green">Tech</span>
              </span>
            </div>
            <p className="text-gray text-sm leading-relaxed max-w-xs">
              Цифровая платформа для управления сельским хозяйством. Данные,
              аналитика, результат.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Платформа</h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="#features"
                className="text-gray text-sm hover:text-green transition-colors"
              >
                Возможности
              </a>
              <a
                href="#roi"
                className="text-gray text-sm hover:text-green transition-colors"
              >
                Результаты
              </a>
              <a
                href="#demo"
                className="text-gray text-sm hover:text-green transition-colors"
              >
                Запросить демо
              </a>
              <a
                href="#"
                className="text-gray text-sm hover:text-green transition-colors"
              >
                Тарифы
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Ресурсы</h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="#"
                className="text-gray text-sm hover:text-green transition-colors"
              >
                Документация
              </a>
              <a
                href="#"
                className="text-gray text-sm hover:text-green transition-colors"
              >
                Блог
              </a>
              <a
                href="#"
                className="text-gray text-sm hover:text-green transition-colors"
              >
                API
              </a>
              <a
                href="#"
                className="text-gray text-sm hover:text-green transition-colors"
              >
                Поддержка
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Контакты</h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="tel:+77172123456"
                className="flex items-center gap-2 text-gray text-sm hover:text-green transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                +7 (7172) 12-34-56
              </a>
              <a
                href="mailto:info@agrotech.kz"
                className="flex items-center gap-2 text-gray text-sm hover:text-green transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                info@agrotech.kz
              </a>
              <div className="flex items-start gap-2 text-gray text-sm">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                <span>г. Астана, БЦ «Talan Towers», 12 этаж</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-border">
          <p className="text-gray text-xs">
            &copy; 2025 AgroTech Solutions. Все права защищены.
          </p>
          <div className="flex gap-4 text-xs text-gray">
            <a href="#" className="hover:text-green transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-green transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
