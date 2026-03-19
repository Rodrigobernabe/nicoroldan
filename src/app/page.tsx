"use client";

import Image from "next/image";
import { Button } from "@/components/ui/card";

// Navigation Component
function Navigation() {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-4 md:px-8 py-4 max-w-[1920px] mx-auto bg-[#FDFFFF]/80 backdrop-blur-md z-50 border-b border-[#012544]/5">
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-3xl text-[#f35615]" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
        <span className="text-xl font-black tracking-tighter text-[#012544] uppercase" style={{ fontFamily: "var(--font-bricolage)" }}>
          IMPULSO
        </span>
      </div>
      <div className="hidden md:flex items-center gap-10">
        <a className="text-sm tracking-tight text-[#f35615] font-bold" style={{ fontFamily: "var(--font-bricolage)" }} href="#inicio">
          Inicio
        </a>
        <a className="text-sm tracking-tight text-[#012544]/60 hover:text-[#012544] transition-all" style={{ fontFamily: "var(--font-bricolage)" }} href="#servicios">
          Servicios
        </a>
        <a className="text-sm tracking-tight text-[#012544]/60 hover:text-[#012544] transition-all" style={{ fontFamily: "var(--font-bricolage)" }} href="#precios">
          Precios
        </a>
        <a className="text-sm tracking-tight text-[#012544]/60 hover:text-[#012544] transition-all" style={{ fontFamily: "var(--font-bricolage)" }} href="#portafolio">
          Portafolio
        </a>
      </div>
      <button className="bg-[#012544] text-[#FDFFFF] px-4 md:px-6 py-2.5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-[#f35615] transition-all">
        INICIAR PROYECTO
      </button>
    </nav>
  );
}

// Floating Rocket Component
function FloatingRocket() {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-50 mix-blend-multiply hidden lg:flex">
      <div className="flex flex-col items-center">
        <span className="material-symbols-outlined text-[#f35615] animate-bounce text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
          rocket_launch
        </span>
        <div className="rocket-trail opacity-20"></div>
      </div>
    </div>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 data-grid-bg"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 flex flex-col gap-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#012544]/5 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-[#f35615] animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#012544] uppercase">Performance Audit: Q4 2024</span>
            </div>
            <h1 className="text-[12vw] md:text-[7rem] leading-[0.85] font-black tracking-tighter uppercase text-[#012544]" style={{ fontFamily: "var(--font-bricolage)" }}>
              NICOLÁS<br/>
              <span className="text-[#f35615]">ROLDÁN</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl border-t border-[#012544]/10 pt-10">
              <div>
                <p className="text-[10px] font-black text-[#f35615] tracking-widest uppercase mb-2">Primary Objective</p>
                <p className="text-sm font-medium leading-relaxed text-[#012544]/80">
                  Orquestar ecosistemas de crecimiento digital de alta velocidad mediante ejecución táctica de precisión.
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-[10px] font-black text-[#f35615] tracking-widest uppercase mb-2">Conversion Lift</p>
                <span className="text-5xl font-black text-[#012544]" style={{ fontFamily: "var(--font-bricolage)" }}>+142%</span>
              </div>
              <div className="flex flex-col">
                <p className="text-[10px] font-black text-[#f35615] tracking-widest uppercase mb-2">Response Time</p>
                <span className="text-5xl font-black text-[#012544]" style={{ fontFamily: "var(--font-bricolage)" }}>72H</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <button className="px-8 py-4 bg-[#012544] text-[#FDFFFF] rounded-lg font-bold text-xs tracking-widest uppercase hover:bg-[#f35615] transition-all">
                EXPLORAR VELOCIDAD
              </button>
              <button className="px-8 py-4 border border-[#012544]/20 text-[#012544] rounded-lg font-bold text-xs tracking-widest uppercase hover:bg-[#012544]/5 transition-all">
                VER PORTFOLIO
              </button>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="relative group">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#012544] border-4 border-[#FDFFFF] shadow-2xl">
                <Image
                  alt="Nicolás Roldán Portrait"
                  className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQlGHmhR1neLXm60K29OosXSMWbJpdBabXe4h_r3EbMDdHgqaQeKAsSD_wWmuoLDcR9yzFyvUY4w8zPSkgf32Kj_RW6TY2r1-jltG3FKN1Bab7htzqcn95qjsFCTd-XrTHbLDccD5jOTn3aGdsGsXbe0VhreieavgTSsgLn1BHgTkcZV6ClJR8u6SS2yYNmrEtoMOPSHy1fdrI8Ymh-v2DNddEjlRsimwY_hOsTmk3ENfVnCXWX7_RbSM1oKom5cM26JUxoSC9bmY4"
                  width={400}
                  height={400}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#f35615] text-[#FDFFFF] px-4 py-2 rounded-lg font-bold text-[10px] tracking-widest uppercase shadow-xl">
                Lead Strategist
              </div>
            </div>
            <div className="bg-[#012544]/5 p-6 rounded-2xl border border-[#012544]/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#f35615]">monitoring</span>
                <h4 className="font-bold text-xs tracking-widest uppercase">Abstract Metric Layer</h4>
              </div>
              <div className="flex items-end gap-1 h-12">
                <div className="flex-1 bg-[#012544]/20 h-1/2 rounded-t-sm"></div>
                <div className="flex-1 bg-[#012544]/20 h-2/3 rounded-t-sm"></div>
                <div className="flex-1 bg-[#f35615] h-full rounded-t-sm"></div>
                <div className="flex-1 bg-[#012544]/20 h-3/4 rounded-t-sm"></div>
                <div className="flex-1 bg-[#012544]/20 h-1/2 rounded-t-sm"></div>
              </div>
              <p className="text-[9px] mt-4 text-[#012544]/40 font-mono">ENCRYPTED_FLOW_DATA_0922</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Marquee Section
function MarqueeSection() {
  const items = [
    { icon: "admob", text: "ADOBE CLOUD" },
    { icon: "psychology", text: "AI STRATEGY" },
    { icon: "monitoring", text: "ANALYTICS" },
    { icon: "rocket", text: "MOTION UI" },
    { icon: "bolt", text: "KINETIC CODE" },
  ];

  return (
    <section id="servicios" className="py-16 relative overflow-hidden bg-[#012544] border-y border-[#FDFFFF]/10">
      <div className="marquee-container">
        <div className="marquee-content flex gap-20 items-center">
          {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 text-2xl font-bold text-[#FDFFFF] opacity-40 hover:opacity-100 transition-opacity"
              style={{ fontFamily: "var(--font-bricolage)" }}
            >
              <span className="material-symbols-outlined text-4xl">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function PricingSection() {
  return (
    <section id="precios" className="py-32 px-4 md:px-8 container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none max-w-2xl text-[#012544]" style={{ fontFamily: "var(--font-bricolage)" }}>
          ESTRUCTURA DE <span className="text-[#f35615]">VALOR</span>
        </h2>
        <p className="text-[#012544]/60 max-w-sm text-right font-medium text-sm">
          Modelos de colaboración diseñados para escalar según la velocidad de tu visión.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
        {/* BASE Plan */}
        <div className="md:col-span-4 bg-white border border-[#012544]/10 rounded-[2rem] p-10 flex flex-col justify-between hover:border-[#f35615]/30 transition-all shadow-sm">
          <div>
            <div className="w-10 h-10 rounded-lg bg-[#012544]/5 flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-[#012544]">anchor</span>
            </div>
            <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>BASE</h3>
            <p className="text-[#012544]/70 text-sm mb-8 leading-relaxed">
              Fundamentos estratégicos para marcas emergentes que buscan dirección clara.
            </p>
            <ul className="space-y-4 mb-12">
              <li className="flex items-center gap-3 text-xs font-bold text-[#012544]">
                <span className="material-symbols-outlined text-sm text-[#f35615]">check_circle</span> Auditoría Visual
              </li>
              <li className="flex items-center gap-3 text-xs font-bold text-[#012544]">
                <span className="material-symbols-outlined text-sm text-[#f35615]">check_circle</span> Estrategia de Contenido
              </li>
              <li className="flex items-center gap-3 text-xs font-bold text-[#012544]">
                <span className="material-symbols-outlined text-sm text-[#f35615]">check_circle</span> Gestión Social 1x
              </li>
            </ul>
          </div>
          <div className="flex justify-between items-end">
            <div className="text-3xl font-black text-[#012544]" style={{ fontFamily: "var(--font-bricolage)" }}>
              $1.2k<span className="text-xs font-normal text-[#012544]/50">/mo</span>
            </div>
            <button className="w-10 h-10 rounded-full bg-[#012544] text-white flex items-center justify-center hover:bg-[#f35615] transition-colors">
              <span className="material-symbols-outlined text-sm">north_east</span>
            </button>
          </div>
        </div>

        {/* CRECIMIENTO Plan - Featured */}
        <div className="md:col-span-8 bg-[#012544] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row gap-12 relative overflow-hidden group shadow-2xl">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#f35615] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
          <div className="flex-1 z-10">
            <div className="inline-block px-3 py-1 rounded-full bg-[#f35615] text-[#FDFFFF] text-[9px] font-black tracking-widest uppercase mb-6">
              MOST VELOCITY
            </div>
            <h3 className="text-4xl md:text-6xl font-black mb-6 text-[#FDFFFF]" style={{ fontFamily: "var(--font-bricolage)" }}>
              CRECIMIENTO
            </h3>
            <p className="text-[#FDFFFF]/70 text-base max-w-md mb-8">
              Impulso total. Ejecución multicanal con enfoque en conversión y retención de audiencia.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <p className="text-[9px] uppercase font-black text-[#f35615] mb-1 tracking-widest">Impacto</p>
                <p className="text-lg font-bold text-[#FDFFFF]">ALTA TRACCIÓN</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <p className="text-[9px] uppercase font-black text-[#f35615] mb-1 tracking-widest">Entrega</p>
                <p className="text-lg font-bold text-[#FDFFFF]">72H SPRINTS</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between z-10 items-start md:items-end">
            <ul className="space-y-4 mb-12 md:text-right">
              <li className="flex items-center md:justify-end gap-3 text-xs font-bold text-[#FDFFFF]">
                <span className="material-symbols-outlined text-sm text-[#f35615]">rocket_launch</span> Producción de Video 4K
              </li>
              <li className="flex items-center md:justify-end gap-3 text-xs font-bold text-[#FDFFFF]">
                <span className="material-symbols-outlined text-sm text-[#f35615]">rocket_launch</span> Performance Ads
              </li>
              <li className="flex items-center md:justify-end gap-3 text-xs font-bold text-[#FDFFFF]">
                <span className="material-symbols-outlined text-sm text-[#f35615]">rocket_launch</span> CRM Automations
              </li>
            </ul>
            <div className="flex flex-col items-start md:items-end">
              <div className="text-5xl md:text-6xl font-black text-[#f35615]" style={{ fontFamily: "var(--font-bricolage)" }}>
                $2.8k<span className="text-sm font-normal text-[#FDFFFF]/40">/mo</span>
              </div>
              <button className="mt-6 px-8 py-4 bg-[#FDFFFF] text-[#012544] rounded-lg font-bold text-xs tracking-widest hover:bg-[#f35615] hover:text-[#FDFFFF] transition-all">
                SELECCIONAR PLAN
              </button>
            </div>
          </div>
        </div>

        {/* PRO Plan */}
        <div className="md:col-span-4 bg-white border border-[#012544]/10 rounded-[2rem] p-10 flex flex-col justify-between hover:border-[#012544]/30 transition-all shadow-sm">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4 text-[#012544]" style={{ fontFamily: "var(--font-bricolage)" }}>PRO</h3>
            <p className="text-[#012544]/70 text-sm mb-12">
              Soluciones personalizadas de nivel enterprise para líderes de industria.
            </p>
          </div>
          <div className="space-y-6 relative z-10">
            <div className="h-[1px] bg-[#012544]/10 w-full"></div>
            <p className="text-[9px] uppercase tracking-widest font-black text-[#f35615]">CONTACTO DIRECTO</p>
            <button className="w-full py-4 bg-[#012544] text-white rounded-lg font-bold text-xs tracking-widest hover:bg-[#f35615] transition-all">
              SOLICITAR COTIZACIÓN
            </button>
          </div>
        </div>

        {/* Stats Panel */}
        <div className="md:col-span-8 bg-[#012544]/5 rounded-[2rem] overflow-hidden flex items-center justify-center p-12 border border-[#012544]/5">
          <div className="grid grid-cols-3 gap-8 w-full">
            <div className="text-center">
              <div className="text-4xl font-black mb-2 text-[#012544]" style={{ fontFamily: "var(--font-bricolage)" }}>24/7</div>
              <div className="text-[9px] uppercase tracking-widest font-black text-[#012544]/40">Soporte Directo</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black mb-2 text-[#012544]" style={{ fontFamily: "var(--font-bricolage)" }}>100%</div>
              <div className="text-[9px] uppercase tracking-widest font-black text-[#012544]/40">IP Ownership</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black mb-2 text-[#012544]" style={{ fontFamily: "var(--font-bricolage)" }}>∞</div>
              <div className="text-[9px] uppercase tracking-widest font-black text-[#012544]/40">Escalabilidad</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Portfolio Section
function PortfolioSection() {
  return (
    <section id="portafolio" className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-[-80px]">
          {/* Instagram Strategy Card */}
          <div className="bg-[#FDFFFF] border border-[#012544]/10 p-8 md:p-12 rounded-[2.5rem] shadow-xl sticky top-32 hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-14 h-14 rounded-xl bg-[#012544] flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl text-white">photo_camera</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#012544]">Estrategia Instagram</h4>
                <p className="text-xs text-[#012544]/50">Narrativa visual &amp; engagement</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-square bg-[#012544]/5 rounded-xl overflow-hidden">
                <Image
                  alt="Social Post"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT51DojHkDdAyRbP6xamX2ii6pqE-0f1ul41-kgGI_gQ6y891NYmgjo4PI5xwDB_uuGY3QmoR__TnACTIFh65uS6jRaOrgC9PC7-rAvn20xRvx4kEuZmmAy_nlVmB3DuLTgDrewgUuZ7H7YSHUUbc59Zc3qFwfAN5fjuSNt2IFLDPcqILPIwG3-9wzYIEIl97A9gB7DavgB-jsLp4Iff9X4_6BXwn_jPxweZV8exGbYnL1WsY-fMQIxz8jBvpSeaBFSQgv-v8tTElp"
                  width={200}
                  height={200}
                />
              </div>
              <div className="aspect-square bg-[#012544]/5 rounded-xl overflow-hidden">
                <Image
                  alt="Social Post"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWVllq8XP7HJpqrwt8JUHH9_iQjRz5QpmLsdaIZg6ai1UeoGwxFYFGpUi8ySQw2WRgcIzVuKG0MCAFDLDCwx1FC0MBvjMhazuNmFtAqgXtjZ85n4_BlqARPVgCk8dTmAPL73cd9Ty7dMG_sENons7-wuFC046GqhZokzNe_EL132jvFDIvGfRD7l2wWSto0kXDozcBpeu3_CKnGKpihC7j0hpM1GpgsH7Itis1dvrC10UUBXemgsbwldBm1_TeplvglBQYVTdhjkSI"
                  width={200}
                  height={200}
                />
              </div>
              <div className="aspect-square bg-[#012544]/5 rounded-xl overflow-hidden">
                <Image
                  alt="Social Post"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxx0SqNXVGoGSKt2M9Lp373mbOIHdQJDeOH-1YhzYfNUhcRRMY3gxJYIQ-epsTS5AoJtaj6AV2przH-gtqJyu78Whcg-hABnvVSiBg8cvoSX1ir0wdIGMFbPUk7gftq3cccB5Jl8CfziWUx7-TssRy2QOIJXhbU4oSYzXpwJa533wlQ4T8-kiCSXghwzZ5SnlLhiTymGprhgHzU-IrG5nHyQP2N3HNLwV77237pkkOUbsL5hEvt9l07lqtbvEU-kJDWLCFDLt57OcT"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>

          {/* TikTok Card */}
          <div className="bg-[#012544] p-8 md:p-12 rounded-[2.5rem] shadow-2xl sticky top-40 hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-14 h-14 rounded-xl bg-[#f35615] flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl text-white">movie</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Velocidad TikTok</h4>
                <p className="text-xs text-white/50">Ciclos virales &amp; tendencias</p>
              </div>
            </div>
            <div className="h-40 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 italic text-white/30 text-xs">
              Área de Vista Previa de Contenido de Alta Retención
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-[#FDFFFF] border border-[#012544]/10 p-8 md:p-12 rounded-[2.5rem] shadow-xl sticky top-48 hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-14 h-14 rounded-xl bg-[#acc9f0] flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl text-[#012544]">work</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#012544]">Autoridad LinkedIn</h4>
                <p className="text-xs text-[#012544]/50">Generación de leads B2B &amp; posicionamiento</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-3 bg-[#012544]/5 rounded-full w-3/4"></div>
              <div className="h-3 bg-[#012544]/5 rounded-full w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-[#012544] text-[#FDFFFF] pt-24 pb-12 mt-auto">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-4xl text-[#f35615]" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
              <span className="text-3xl font-black tracking-tighter" style={{ fontFamily: "var(--font-bricolage)" }}>
                IMPULSO
              </span>
            </div>
            <p className="text-[#FDFFFF]/60 max-w-xs mb-8 text-sm leading-relaxed">
              Redefiniendo el límite de lo posible en el espacio digital. Basado en resultados, impulsado por la precisión.
            </p>
            <div className="flex gap-3">
              <a className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#FDFFFF] hover:bg-[#f35615] transition-all" href="#">
                <span className="material-symbols-outlined text-lg">share</span>
              </a>
              <a className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#FDFFFF] hover:bg-[#f35615] transition-all" href="#">
                <span className="material-symbols-outlined text-lg">alternate_email</span>
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-black text-[#f35615] mb-6 uppercase tracking-widest text-[10px]" style={{ fontFamily: "var(--font-bricolage)" }}>Explorar</h5>
            <ul className="space-y-4 text-xs text-[#FDFFFF]/60">
              <li><a className="hover:text-white transition-colors" href="#inicio">Inicio</a></li>
              <li><a className="hover:text-white transition-colors" href="#servicios">Servicios</a></li>
              <li><a className="hover:text-white transition-colors" href="#precios">Precios</a></li>
              <li><a className="hover:text-white transition-colors" href="#portafolio">Portafolio</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-[#f35615] mb-6 uppercase tracking-widest text-[10px]" style={{ fontFamily: "var(--font-bricolage)" }}>Legal</h5>
            <ul className="space-y-4 text-xs text-[#FDFFFF]/60">
              <li><a className="hover:text-white transition-colors" href="#">Política de Privacidad</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Términos de Servicio</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Cookies</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Contacto</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-[10px] text-white/40 tracking-[0.2em] uppercase">
            ©2026 IMPULSO. TODOS LOS DERECHOS RESERVADOS.
          </span>
          <div className="flex gap-8">
            <span className="text-[9px] text-[#f35615] font-black tracking-[0.3em]">EJECUCIÓN DE ALTA VELOCIDAD</span>
            <span className="text-[9px] text-white/20 font-black tracking-[0.3em]">DISEÑADO PARA ESCALAR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <>
      <Navigation />
      <FloatingRocket />
      <main className="page-content">
        <HeroSection />
        <MarqueeSection />
        <PricingSection />
        <PortfolioSection />
      </main>
      <Footer />
    </>
  );
}
