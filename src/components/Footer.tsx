import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#faf8f5] border-t border-[#F0CDAF]/40 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="flex flex-col items-center md:items-start gap-2">
          <Image
            src="/logo.png"
            alt="House of Nine"
            width={48}
            height={58}
            className="object-contain drop-shadow-[0_0_8px_rgba(200,169,110,0.25)]"
          />
          <p className="text-[#7a5c52]/60 text-xs tracking-wide">Luxury Interior Design Studio</p>
        </a>

        <div className="flex flex-wrap justify-center gap-6 text-xs text-[#7a5c52]/60 tracking-wide">
          {["About", "Services", "Portfolio", "Process", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-[#B96D56] transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <p className="text-[#7a5c52]/40 text-xs tracking-wide">
          © {new Date().getFullYear()} House of Nine. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
