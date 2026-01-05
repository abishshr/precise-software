"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface Screenshot {
  title: string;
  description: string;
  image: string;
}

interface ScreenshotGalleryProps {
  screenshots: Screenshot[];
}

export function ScreenshotGallery({ screenshots }: ScreenshotGalleryProps) {
  const [selected, setSelected] = useState<Screenshot | null>(null);

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {screenshots.map((s) => (
          <div
            key={s.title}
            className="group bg-white rounded-xl border border-slate-200 overflow-hidden cursor-pointer hover:shadow-lg hover:border-slate-300 transition-all duration-300"
            onClick={() => setSelected(s)}
          >
            <div className="relative aspect-video bg-slate-100 overflow-hidden">
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-sm text-slate-900">{s.title}</h4>
              <p className="text-slate-500 text-sm">{s.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={() => setSelected(null)}
          >
            <X size={24} />
          </button>
          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selected.image}
              alt={selected.title}
              width={1920}
              height={1080}
              className="w-full h-auto rounded-lg"
            />
            <div className="text-center mt-4">
              <h4 className="text-white font-semibold">{selected.title}</h4>
              <p className="text-white/60 text-sm">{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
