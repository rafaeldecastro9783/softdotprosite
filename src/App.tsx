import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    interesse: '',
    mensagem: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // enviar ao backend aqui (fetch/axios)
    console.log('Dados do formulário:', formData);
    alert('Obrigado! Recebemos sua mensagem.');
    setFormData({ nome:'', email:'', telefone:'', interesse:'', mensagem:'' });
  };

  return (
    <div className="min-h-screen text-sdtext font-sans bg-white">
      {/* Header */}
      <header className="fixed w-full z-40 bg-white/40 backdrop-blur-sm border-b">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <img src="/assets/logo-mark.png" alt="Soft.Pro" className="w-12 h-12" />
            <div>
              <h1 className="text-xl font-bold">softdotpro</h1>
              <p className="text-xs -mt-1 text-gray-500">Software Development & Consulting</p>
            </div>
          </a>

          <nav className="hidden md:flex gap-6 items-center text-gray-700">
            <a href="#produtos" className="hover:text-sdblue transition">Produtos</a>
            <a href="#sobre" className="hover:text-sdblue transition">Sobre</a>
            <a href="#contato" className="hover:text-sdblue transition">Contato</a>
            <a href="/#cadastro" className="ml-4 inline-block px-4 py-2 rounded-full bg-gradient-to-r from-sdblue to-sdgreen text-white shadow-lg">Cadastre-se</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="pt-28">
        <section className="hero-bg relative overflow-hidden">
          <div className="container mx-auto px-6 py-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .7 }} >
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                  Soluções tecnológicas sob medida
                </h2>
                <p className="text-lg text-gray-600 mb-6 max-w-xl">
                  Automação, inteligência artificial e sistemas personalizados para empresas modernas — integração com WhatsApp, VoIP e monitoramento inteligente.
                </p>

                <div className="flex gap-4">
                  <a href="#produtos" className="px-5 py-3 rounded-md bg-gradient-to-r from-sdblue to-sdgreen text-white font-semibold shadow-lg inline-block">
                    Conheça nossos produtos
                  </a>
                  <a href="#contato" className="px-5 py-3 rounded-md border border-gray-200 text-gray-700 inline-block">
                    Fale com a gente
                  </a>
                </div>
              </motion.div>

              <motion.div initial={{ scale: .9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: .7 }}>
                <div className="w-full rounded-2xl p-8 bg-gradient-to-br from-white/80 to-white/60 shadow-2xl flex items-center justify-center">
                  <img src="/assets/logo-full.png" alt="Soft.Pro logo" className="max-w-sm" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Produtos */}
        <section id="produtos" className="container mx-auto px-6 py-16">
          <motion.h3 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-3xl font-semibold mb-8">
            Nossos Produtos
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Gessie Virtual', desc: 'Assistente IA no WhatsApp para agendamentos e atendimento.' },
              { title: 'Voice Pro', desc: 'Interfonia VoIP integrada com segurança e automação.' },
              { title: 'WPPAPI', desc: 'API WhatsApp multi-instância para integração de bots.' },
              { title: 'SkyGuard', desc: 'Monitoramento com IA para vigilância e alertas.' },
            ].map((p, i) => (
              <motion.div key={p.title} whileHover={{ y: -6 }} className="p-5 bg-white rounded-2xl border shadow-sm">
                <h4 className="text-lg font-bold mb-2">{p.title}</h4>
                <p className="text-sm text-gray-600">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="container mx-auto px-6 py-12">
          <div className="md:flex md:items-center md:gap-12">
            <motion.div className="md:w-1/2" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
              <h3 className="text-3xl font-semibold mb-4">Quem somos</h3>
              <p className="text-gray-600 max-w-xl">
                A softdotpro entrega soluções digitais sob medida com foco em automação, Inteligência Artificial e integração de sistemas. Atuamos do planejamento à entrega, com ênfase em resultados mensuráveis.
              </p>
            </motion.div>

            <motion.div className="mt-8 md:mt-0 md:w-1/2" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
              <div className="p-6 rounded-2xl border bg-white shadow-sm">
                <h4 className="font-semibold mb-2">Diferenciais</h4>
                <ul className="text-gray-600 list-disc list-inside">
                  <li>Integrações robustas (WhatsApp, VoIP, APIs)</li>
                  <li>Implantação e suporte contínuo</li>
                  <li>Integrações entre equipamentos e sistemas</li>
                  <li>Helpdesk</li>
                  <li>Equipe especializada em segurança e performance</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contato / Form */}
        <section id="contato" className="container mx-auto px-6 py-12">
          <motion.h3 initial={{ y: 12, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="text-2xl font-semibold mb-6">Fale com a gente</motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x:0, opacity:1 }}>
              <div className="p-6 rounded-2xl border bg-white shadow-sm">
                <h4 className="font-semibold mb-3">Contato</h4>
                <p className="text-gray-600">81 99949-3640 — contato@softdotpro.com</p>
                <div className="mt-6">
                  <p className="text-sm font-semibold mb-2">Horário de atendimento</p>
                  <p className="text-gray-600">Seg–Sex 9:00–18:00</p>
                </div>
              </div>
            </motion.div>

            <motion.form onSubmit={handleSubmit} className="p-6 rounded-2xl border bg-white shadow-sm" initial={{ x: 20, opacity: 0 }} animate={{ x:0, opacity:1 }}>
              <div className="space-y-3">
                <input name="nome" value={formData.nome} onChange={handleChange} required placeholder="Seu nome" className="w-full p-3 border rounded" />
                <input name="email" value={formData.email} onChange={handleChange} required placeholder="Seu e-mail" className="w-full p-3 border rounded" />
                <input name="telefone" value={formData.telefone} onChange={handleChange} placeholder="Telefone ou WhatsApp" className="w-full p-3 border rounded" />
                <select name="interesse" value={formData.interesse} onChange={handleChange} required className="w-full p-3 border rounded">
                  <option value="">Produto de interesse</option>
                  <option>Gessie Virtual</option>
                  <option>Voice Pro</option>
                  <option>WPPAPI</option>
                  <option>SkyGuard</option>
                </select>
                <textarea name="mensagem" value={formData.mensagem} onChange={handleChange} rows={4} placeholder="Mensagem" className="w-full p-3 border rounded"></textarea>

                <div className="flex items-center justify-between">
                  <button type="submit" className="px-4 py-2 rounded-md bg-gradient-to-r from-sdblue to-sdgreen text-white font-semibold">Enviar</button>
                  <small className="text-xs text-gray-500">Responderemos em até 1 dia útil</small>
                </div>
              </div>
            </motion.form>
          </div>
        </section>

        <div id="cadastro" className="h-6"></div>
      </main>

      <footer className="bg-gray-50 border-t py-8 mt-10">
        <div className="container mx-auto px-6 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} softdotpro — Software Development & Consulting
        </div>
      </footer>
    </div>
  );
}
