"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { RoomType } from "../data";

interface Props {
  rooms: RoomType[];
  selected: string | null;
  onSelect: (id: string) => void;
}

export default function StepRoom({ rooms, selected, onSelect }: Props) {
  return (
    <div>
      <p className="text-sm text-[#7a5c52] mb-5">
        Which room are you looking to transform?
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {rooms.map((room, i) => {
          const active = selected === room.id;
          return (
            <motion.button
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.35 }}
              whileHover={{ y: -3 }}
              onClick={() => onSelect(room.id)}
              className={`group relative rounded-2xl border overflow-hidden text-left transition-all duration-300 ${
                active
                  ? "border-[#B96D56] ring-2 ring-[#B96D56]/20 shadow-lg shadow-[#B96D56]/10"
                  : "border-[#F0CDAF]/60 hover:border-[#B96D56]/40 shadow-sm"
              }`}
            >
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-2xl">{room.icon}</span>
                </div>
                {active && (
                  <motion.div
                    layoutId="room-check"
                    className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[#B96D56] flex items-center justify-center"
                  >
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                )}
              </div>

              <div className="p-4 bg-white">
                <h3 className="font-serif text-lg text-[#1a0f0a]">{room.name}</h3>
                <p className="text-xs text-[#7a5c52] mt-1 leading-relaxed">
                  {room.description}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
