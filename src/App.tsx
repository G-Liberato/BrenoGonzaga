/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  Instagram, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  Star, 
  ShieldCheck, 
  UserCheck, 
  Plus,
  X
} from 'lucide-react';

const EXPERT_DATA = {
  name: "Breno Gonzaga",
  profession: "Especialista em Implantodontia e Ortodontia",
  city: "Minas Gerais",
  whatsapp: "https://api.whatsapp.com/send?phone=5538999903666",
  instagram: "https://www.instagram.com/drbrenogonzaga/",
  heroImage: "https://i.imgur.com/Zb2jttR.png",
  expertImage: "https://i.imgur.com/hYe8PtN.jpeg",
  results: [
    "https://i.imgur.com/x6k8sQ4.jpeg",
    "https://i.imgur.com/nApNHmd.jpeg",
    "https://i.imgur.com/bbH6AHq.jpeg",
    "https://i.imgur.com/eB1rQJA.jpeg",
    "https://i.imgur.com/mwlYocA.jpeg",
    "https://i.imgur.com/ZFLVqFq.jpeg",
    "https://i.imgur.com/Wi8UTGh.jpeg",
    "https://i.imgur.com/CRKaKub.jpeg",
    "https://i.imgur.com/UFAMVtI.jpeg",
    "https://i.imgur.com/iQehoHk.jpeg"
  ]
};

const Section = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <section className={`py-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden ${className}`}>
    {children}
  </section>
);

const ButtonCTA = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.a
    href={EXPERT_DATA.whatsapp}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold py-5 px-10 rounded-lg shadow-lg shadow-emerald-100 text-sm uppercase tracking-widest transition-all hover:bg-[#1eb957] ${className}`}
  >
    <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
    {children}
  </motion.a>
);

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen selection:bg-luxury-gold/20 selection:text-luxury-ink">
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-luxury-ink/95 flex items-center justify-center p-4 backdrop-blur-md"
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Resultado ampliado"
              className="max-w-full max-h-[85vh] rounded-sm shadow-2xl border-4 border-white/10"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-end bg-white overflow-hidden border-b border-zinc-100">
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
           <h2 className="text-[25vw] font-serif font-black uppercase tracking-tighter transform">
             GONZAGA
           </h2>
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-12 w-full max-w-5xl mx-auto pt-24 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 inline-flex items-center gap-3 px-6 py-2 rounded-none border border-luxury-gold/30 text-luxury-gold text-[10px] font-bold uppercase tracking-[0.3em]"
          >
            Especialista em Sorrisos
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-6xl md:text-8xl font-serif font-light mb-8 leading-[1.05] text-luxury-ink"
          >
            Eu sou <br />
            <span className="font-medium italic text-luxury-gold">{EXPERT_DATA.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-luxury-muted text-lg md:text-xl mb-12 max-w-xl font-light leading-relaxed tracking-wide"
          >
            Implantodontia e Ortodontia de <span className="text-luxury-ink font-semibold italic">alta performance</span> em {EXPERT_DATA.city}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full flex flex-col items-center gap-6 mb-16"
          >
            <ButtonCTA className="w-full md:w-auto">
              Agendar Primeira Consulta Gratuita
            </ButtonCTA>
            <span className="text-luxury-muted text-[11px] font-medium uppercase tracking-widest flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-luxury-gold rounded-full" />
              Resposta rápida • Sem compromisso
            </span>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full max-w-4xl flex justify-center h-[450px] md:h-[650px]"
        >
          <img 
            src={EXPERT_DATA.heroImage} 
            alt={EXPERT_DATA.name}
            className="h-full object-contain object-bottom select-none pointer-events-none drop-shadow-3xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* 2. BLOCO – Quem sou eu */}
      <Section className="bg-luxury-off !max-w-none border-y border-zinc-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[400px_1fr] gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-[30px_30px_0px_0px_#C5A05920] border border-white">
              <img 
                src={EXPERT_DATA.expertImage} 
                alt="Dr. Breno Gonzaga" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <span className="text-luxury-gold text-[10px] font-bold uppercase tracking-[0.4em]">Autoridade pessoal</span>
              <h2 className="text-4xl md:text-5xl font-serif text-luxury-ink leading-tight font-light">
                Excelência Clínica & <span className="italic">Foco no Paciente.</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-luxury-muted text-lg font-light leading-relaxed max-w-2xl">
              <p>
                Com anos de experiência em Minas Gerais, transformo vidas através da reabilitação oral e estética. Meu compromisso é alinhar tecnologia de ponta com um atendimento humano e direto.
              </p>
              <p>
                Acredito que cada sorriso é único. Por isso, crio planos sob medida que respeitam a sua individualidade e buscam a harmonia total.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pt-6">
              {[
                "Avaliação Honesta",
                "Tecnologia de Ponta",
                "Atendimento Exclusivo",
                "Resultados Reais"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full transition-transform group-hover:scale-150" />
                  <span className="font-bold text-xs uppercase tracking-widest text-luxury-ink">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 3. BLOCO – Resultados Reais */}
      <Section>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl text-left">
            <span className="text-luxury-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Prova Visual</span>
            <h2 className="text-4xl md:text-5xl font-serif text-luxury-ink font-light">
              Resultados Reais
            </h2>
          </div>
          <p className="text-luxury-muted text-xs font-medium uppercase tracking-widest mb-1">
            *Resultados variam por paciente.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {EXPERT_DATA.results.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setSelectedImage(img)}
              className="group relative aspect-square rounded-sm overflow-hidden cursor-pointer bg-luxury-off border border-zinc-100"
            >
              <img 
                src={img} 
                alt={`Resultado ${idx + 1}`} 
                className="w-full h-full object-cover transition-all duration-700 grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-luxury-ink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Plus className="text-white w-8 h-8 stroke-[1px]" />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 4. BLOCO – Por que confiar em mim? */}
      <Section className="!max-w-none bg-luxury-ink text-white py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-luxury-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block">Diferenciais Premium</span>
            <h2 className="text-5xl md:text-6xl font-serif mb-8 font-light italic">Por que confiar em mim?</h2>
            <div className="w-20 h-px bg-luxury-gold/50 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Diagnóstico Preciso",
                desc: "Análise detalhada da sua saúde bucal utilizando tecnologia digital avançada para máxima precisão.",
                icon: <ShieldCheck className="w-10 h-10 text-luxury-gold stroke-[1px]" />
              },
              {
                title: "Plano Personalizado",
                desc: "Cada sorriso é uma obra única. Criamos o caminho estético e funcional ideal para você.",
                icon: <Calendar className="w-10 h-10 text-luxury-gold stroke-[1px]" />
              },
              {
                title: "Suporte Total",
                desc: "Acompanhamento próximo do início ao fim, garantindo tranquilidade em todas as etapas.",
                icon: <MessageCircle className="w-10 h-10 text-luxury-gold stroke-[1px]" />
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-white/5 border-l border-luxury-gold/30 backdrop-blur-sm group hover:bg-white/10 transition-colors"
              >
                <div className="mb-8 p-4 bg-white/5 w-fit rounded-full transition-all group-hover:bg-luxury-gold/10 group-hover:scale-110">
                  {card.icon}
                </div>
                <h3 className="text-xl font-serif mb-4 tracking-wide group-hover:text-luxury-gold transition-colors">{card.title}</h3>
                <p className="text-zinc-400 font-light leading-relaxed text-sm tracking-widest">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <Section className="text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-luxury-ink font-light italic">
            Inicie sua transformação hoje.
          </h2>
          <p className="text-luxury-muted mb-12 font-light text-lg tracking-wide">
            Primeira consulta gratuita e sem compromisso. <br />
            Agendamento via WhatsApp em 3 passos simples.
          </p>
          <ButtonCTA className="mx-auto">
            Agendar Consulta Gratuita
          </ButtonCTA>
        </motion.div>
      </Section>

      {/* 6. BLOCO – Como funciona a primeira consulta */}
      <Section className="bg-white border-t border-zinc-100 !max-w-none">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div className="order-2 md:order-1">
            <span className="text-luxury-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">O Caminho</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-12 text-luxury-ink leading-tight font-light">
               Processo Simples, <br />
               <span className="italic">Resultados Excepcionais.</span>
            </h2>
            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "WhatsApp",
                  desc: "Clique no botão de agendamento e envie uma mensagem rápida."
                },
                {
                  step: "02",
                  title: "Agendamento",
                  desc: "Escolheremos o melhor horário para sua rotina."
                },
                {
                  step: "03",
                  title: "Avaliação",
                  desc: "Diagnóstico completo e plano ideal para seu novo sorriso."
                }
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-10 items-start "
                >
                  <span className="text-xs font-bold text-luxury-gold pt-2 tracking-[0.2em]">
                    {step.step}
                  </span>
                  <div className="pb-8 border-b border-zinc-100 flex-1 last:border-0">
                    <h3 className="text-lg font-bold mb-3 uppercase tracking-widest text-luxury-ink">{step.title}</h3>
                    <p className="text-luxury-muted font-light text-sm leading-relaxed tracking-wider">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="aspect-square bg-luxury-off flex items-center justify-center p-12">
              <div className="relative w-full aspect-square border border-luxury-gold/20 flex flex-col items-center justify-center p-12 text-center group">
                 <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-luxury-gold/40" />
                 <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-luxury-gold/40" />
                 <span className="text-luxury-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-4">First Appointment</span>
                 <p className="text-3xl font-serif italic mb-2 tracking-wide font-light">Free of Charge</p>
                 <div className="w-12 h-px bg-luxury-gold/30 my-6" />
                 <p className="text-xs text-luxury-muted uppercase tracking-[0.2em] font-medium transition-colors group-hover:text-emerald-500">Available This Week</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. BLOCO – Mais provas (Expert + Bastidores) */}
      <Section className="bg-luxury-off border-y border-zinc-100 !max-w-none">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
            <div className="flex-1">
              <span className="text-luxury-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Life & Work</span>
              <h2 className="text-4xl md:text-5xl font-serif text-luxury-ink font-light italic">Dedicação & Bastidores</h2>
              <p className="text-luxury-muted font-light mt-4 tracking-wide">
                Odontologia moderna com um toque humano. O seu conforto é a nossa prioridade absoluta.
              </p>
            </div>
            <div className="flex gap-4">
              <a 
                href={EXPERT_DATA.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3 bg-white rounded-none border border-zinc-200 text-luxury-ink text-[11px] font-bold uppercase tracking-widest hover:bg-zinc-50 transition-colors"
              >
                <Instagram className="w-4 h-4 text-luxury-gold" />
                Siga no Instagram
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group rounded-sm overflow-hidden aspect-video shadow-xl border border-white">
               <img 
                 src={EXPERT_DATA.expertImage} 
                 alt="Atendimento Personalizado" 
                 className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-luxury-ink/90 to-transparent text-white translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                 <p className="font-serif text-2xl mb-2 italic">Atendimento exclusivo</p>
                 <p className="text-xs uppercase tracking-widest text-luxury-gold font-bold">Cuidado personalizado em cada etapa.</p>
               </div>
            </div>
            <div className="relative group rounded-sm overflow-hidden aspect-video shadow-xl border border-white">
               <img 
                 src="https://i.imgur.com/Wi8UTGh.jpeg" 
                 alt="Checkup Digital" 
                 className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-luxury-ink/90 to-transparent text-white translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                 <p className="font-serif text-2xl mb-2 italic">Tecnologia avançada</p>
                 <p className="text-xs uppercase tracking-widest text-luxury-gold font-bold">Equipamentos de última geração.</p>
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. CTA FINAL */}
      <Section className="flex flex-col items-center text-center min-h-[70vh] justify-center bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <span className="text-luxury-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-8 block">Your Transformation</span>
          <h2 className="text-6xl md:text-8xl font-serif font-light mb-12 leading-[1.1] text-luxury-ink tracking-tight">
            Seu próximo sorriso começa com <br />
            <span className="italic text-luxury-gold font-medium">um clique.</span>
          </h2>
          <p className="text-luxury-muted text-xl font-light mb-16 max-w-xl mx-auto tracking-wide">
            Garanta sua primeira consulta hoje mesmo e descubra o potencial do seu sorriso.
          </p>
          <ButtonCTA className="mx-auto scale-110">
            Agendar Minha Consulta Gratuita
          </ButtonCTA>
          <div className="mt-12 flex items-center justify-center gap-4 text-luxury-muted text-[10px] items-center font-bold uppercase tracking-[0.3em]">
            <CheckCircle2 className="w-4 h-4 text-luxury-gold" />
            100% gratuito e sem compromisso
          </div>
        </motion.div>
      </Section>
      <footer className="bg-luxury-ink py-16 px-12 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left space-y-4">
            <div>
              <h3 className="font-serif text-3xl font-light italic mb-1 tracking-wider">{EXPERT_DATA.name}</h3>
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.4em]">Implantodontia & Ortodontia</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3 text-luxury-gold text-[11px] font-medium tracking-widest">
              <MapPin className="w-4 h-4" />
              {EXPERT_DATA.city}
            </div>
          </div>

          <div className="flex items-center gap-10">
            <a 
              href={EXPERT_DATA.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex flex-col items-center gap-3"
            >
              <div className="p-4 rounded-full border border-white/10 group-hover:border-luxury-gold transition-colors group-hover:scale-110 duration-300">
                <Instagram className="w-6 h-6 text-white/70 group-hover:text-luxury-gold transition-colors" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-luxury-gold">Insta</span>
            </a>
            <a 
              href={EXPERT_DATA.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex flex-col items-center gap-3"
            >
              <div className="p-4 rounded-full border border-white/10 group-hover:border-emerald-500 transition-colors group-hover:scale-110 duration-300">
                <MessageCircle className="w-6 h-6 text-white/70 group-hover:text-emerald-500 transition-colors" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-emerald-500">Whats</span>
            </a>
          </div>

          <div className="text-zinc-600 text-[10px] uppercase tracking-[0.3em] font-bold">
            © {new Date().getFullYear()} • Premium Dental Care
          </div>
        </div>
      </footer>
    </div>
  );
}
