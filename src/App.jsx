import React, { useState } from 'react';
import minhaFoto from "./assets/minha-foto.jpg";
import fotoMaratonaImg from "./assets/minha-foto-maratona.jpg";
import erickFotoImg from "./assets/erick-foto.png";

// VÍDEOS DE INGLÊS
import videoIngles1 from "./video-ingles1.mp4";
import videoIngles2 from "./video-ingles2.mp4";
import videoIngles3 from "./video-ingles3.mp4";

// VÍDEOS DE IA E PROGRAMAÇÃO
import videoIa1 from "./video-ia1.mp4"; 
import videoIa2 from "./video-ia2.mp4";
import videoIa3 from "./video-ia3.mp4";
import videoMatematica from "./video-matematica.mp4";

import { 
  Mail, 
  Trophy, 
  Code2, 
  Cpu, 
  Terminal, 
  ExternalLink,
  Award,
  X,
  UserCheck,
  Video,
  Play,
  Globe,
  Layers,
  FileCode2
} from 'lucide-react';

export default function Portfolio() {
  const [fotoMaratona, setFotoMaratona] = useState(false);
  const [erickInfo, setErickInfo] = useState(false);
  const [videoAtivo, setVideoAtivo] = useState(null);
  const [categoriaAtiva, setCategoriaAtiva] = useState('programacao'); // 'programacao', 'ingles' ou 'outros'

  // VÍDEOS FOCADOS EM PROGRAMAÇÃO E IA
  const videoListProgramacao = [
    {
      id: "prog1",
      title: "Real-Time Computer Vision & React Integration",
      description: "Demonstração prática do algoritmo de visão computacional rodando no navegador a 60 FPS.",
      duration: "Demo 01",
      videoUrl: videoIa1,
      tag: "Programação / React + AI"
    },
    {
      id: "prog2",
      title: "WorkGuard AI - Detecção de EPIs com YOLOv8",
      description: "Execução do sistema de monitoramento de segurança e análise de imagens em tempo real.",
      duration: "Demo 02",
      videoUrl: videoIa2,
      tag: "Programação / Python & OpenCV"
    },
    {
      id: "prog3",
      title: "AI Model Testing & Performance Showcase",
      description: "Apresentação e validação prática de modelos de IA aplicados ao desenvolvimento.",
      duration: "Demo 03",
      videoUrl: videoIa3,
      tag: "Programação / Artificial Intelligence"
    }
  ];

  // VÍDEOS FOCADOS EM PRÁTICA DE INGLÊS
  const videoListIngles = [
    {
      id: "video1",
      title: "English Practice - Video 01",
      description: "Demonstrating English speaking skills, vocabulary, and communication practice.",
      duration: "Video 01",
      videoUrl: videoIngles1,
      tag: "English Practice"
    },
    {
      id: "video2",
      title: "English Practice - Video 02",
      description: "Practicing conversational English, pronunciation, and fluency exercises.",
      duration: "Video 02",
      videoUrl: videoIngles2,
      tag: "Speaking Session"
    },
    {
      id: "video3",
      title: "English Practice - Video 03",
      description: "English speaking presentation showing progress and daily practice routine.",
      duration: "Video 03",
      videoUrl: videoIngles3,
      tag: "Fluency Practice"
    }
  ];

  // OUTRA CATEGORIA DE VÍDEOS
  const videoListOutros = [
    {
      id: "outro1",
      title: "Apresentação Geral de Projetos",
      description: "Visão geral sobre arquitetura de software, estrutura de dados e rotina de estudos.",
      duration: "Geral",
      videoUrl: videoIa1,
      tag: "Apresentação"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-200 font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* BACKGROUND GLOW */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-emerald-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0d1117]/80 border-b border-gray-800/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono text-cyan-400 font-bold text-lg tracking-wider">
            &lt;Wanderley.Ariel /&gt;
          </span>
          <div className="flex gap-6 text-sm font-medium text-gray-400">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-cyan-400 transition-colors">Achievements</a>
            <a href="#videos" className="hover:text-cyan-400 transition-colors">Videos</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="max-w-6xl mx-auto px-6 pt-16 pb-16 relative">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-6">
              <Terminal size={14} /> Junior Software Developer & AI Specialist
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
              Wanderley <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-200">Ariel</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed mb-8 mx-auto lg:mx-0">
              Software Developer focused on <strong className="text-white">React, Python, and Real-Time Computer Vision</strong>. I turn complex AI algorithms into smooth, scalable web applications.
            </p>

            {/* BADGES */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl">
              <div 
                onClick={() => setFotoMaratona(true)}
                className="p-4 rounded-xl bg-gray-900/60 border border-gray-800 flex items-center gap-3 text-left cursor-pointer hover:border-amber-500/50 hover:bg-gray-800/80 transition-all group"
              >
                <Trophy className="text-amber-400 shrink-0 group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <p className="text-xs text-gray-400 font-medium">IT Competition</p>
                  <p className="text-sm font-bold text-white flex items-center gap-1">
                    1st Place Marathon <span className="text-xs">📸</span>
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-800 flex items-center gap-3 text-left">
                <Cpu className="text-cyan-400 shrink-0" size={24} />
                <div>
                  <p className="text-xs text-gray-400 font-medium">Specialization</p>
                  <p className="text-sm font-bold text-white">OpenCV + YOLO + React</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-800 flex items-center gap-3 text-left">
                <Award className="text-emerald-400 shrink-0" size={24} />
                <div>
                  <p className="text-xs text-gray-400 font-medium">Language / Global</p>
                  <p className="text-sm font-bold text-white">Intermediate English</p>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#projects" className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-all flex items-center gap-2">
                <Code2 size={18} /> View AI Projects
              </a>
              <a href="#videos" className="px-6 py-3 rounded-lg bg-gray-900 border border-gray-700 hover:border-cyan-500/50 text-gray-200 font-semibold transition-all flex items-center gap-2">
                <Video size={18} /> Video Demos
              </a>
            </div>
          </div>

          <div className="shrink-0 flex justify-center lg:justify-end">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-2xl shadow-cyan-500/20 group">
              <img 
                src={minhaFoto} 
                alt="Wanderley Ariel - Profile Picture" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </section>
{/* ABOUT SECTION */}
<section id="about" className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-800/60">
  <h2 className="text-3xl font-bold text-white mb-6">
    About Me
  </h2>

  <div className="max-w-3xl">
    <p className="text-gray-400 text-lg leading-relaxed mb-4">
      I'm Wanderley Ariel, a Junior Software Developer passionate about
      programming, artificial intelligence, and computer vision.
    </p>

    <p className="text-gray-400 text-lg leading-relaxed mb-4">
      I develop projects using technologies such as React, JavaScript,
      Python, OpenCV, and YOLO. I enjoy turning ideas into real applications
      and constantly improving my programming skills.
    </p>

    <p className="text-gray-400 text-lg leading-relaxed">
      I'm currently looking for my first professional opportunity in
      technology, where I can contribute, learn from experienced developers,
      and grow as a software developer.
    </p>
  </div>
</section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-800/60">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <Code2 className="text-cyan-400" /> Featured Projects
        </h2>
        <p className="text-gray-400 mb-12">High-performance solutions with a focus on computer vision and web engineering.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* PROJETO 1 */}
          <div className="group rounded-2xl bg-gray-900/40 border border-gray-800 p-6 hover:border-cyan-500/50 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20">
                  Client-side AI • 60 FPS
                </span>
                <a href="#" className="text-gray-400 hover:text-white"><ExternalLink size={20} /></a>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
               I developed this football AI application using OpenCV and YOLO to detect goals and key moments, automatically cut the highlights, and deliver the best plays.
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">Football application using AI, OpenCV, and YOLO to automatically detect the best moments of your gameplay, including goals and key plays. The system identifies these moments, cuts the corresponding video clips, and delivers the highlights to you. In this video, I explain each step of the development process.              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2.5 py-1 rounded bg-gray-800 text-gray-300 text-xs font-mono">React</span>
                <span className="px-2.5 py-1 rounded bg-gray-800 text-gray-300 text-xs font-mono">MediaPipe</span>
                <span className="px-2.5 py-1 rounded bg-gray-800 text-gray-300 text-xs font-mono">HTML5 Canvas</span>
                <span className="px-2.5 py-1 rounded bg-gray-800 text-gray-300 text-xs font-mono">Vite</span>
              </div>
              
              <div className="flex items-center justify-between border-t border-gray-800/80 pt-4">
                <a href="#" className="text-cyan-400 text-sm font-semibold hover:underline flex items-center gap-1">
                  View Code on GitHub &rarr;
                </a>
                <button 
                  onClick={() => setVideoAtivo(videoIa1)}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-black text-xs font-bold transition-all flex items-center gap-1.5"
                >
                  <Play size={14} /> Ver Vídeo
                </button>
              </div>
            </div>
          </div>

          {/* PROJETO 2 */}
          <div className="group rounded-2xl bg-gray-900/40 border border-gray-800 p-6 hover:border-cyan-500/50 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20">
                  Computer Vision • PPE
                </span>
                <a href="#" className="text-gray-400 hover:text-white"><ExternalLink size={20} /></a>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                I developed an AI app that analyzes reactions in real time using OpenCV.
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                       AI Emotion & Movement Recognition
                      I developed an AI application using OpenCV to recognize facial reactions and body movements in real time, displaying the detected emotions through emojis and identifying when I am moving or dancing.              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2.5 py-1 rounded bg-gray-800 text-gray-300 text-xs font-mono">Python 3</span>
                <span className="px-2.5 py-1 rounded bg-gray-800 text-gray-300 text-xs font-mono">OpenCV</span>
                <span className="px-2.5 py-1 rounded bg-gray-800 text-gray-300 text-xs font-mono">YOLOv8</span>
                <span className="px-2.5 py-1 rounded bg-gray-800 text-gray-300 text-xs font-mono">Deep Learning</span>
              </div>

              <div className="flex items-center justify-between border-t border-gray-800/80 pt-4">
                <a href="#" className="text-cyan-400 text-sm font-semibold hover:underline flex items-center gap-1">
                  View Repository &rarr;
                </a>
                <button 
                  onClick={() => setVideoAtivo(videoIa2)}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-black text-xs font-bold transition-all flex items-center gap-1.5"
                >
                  <Play size={14} /> Ver Vídeo
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ACHIEVEMENTS SECTION */}
      <section id="achievements" className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-800/60">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <Trophy className="text-amber-400" /> Achievements & Mentorship
        </h2>

        <div className="flex flex-col gap-6">
          <div 
            onClick={() => setFotoMaratona(true)}
            className="rounded-2xl bg-gradient-to-r from-amber-500/10 via-transparent to-transparent border border-amber-500/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6 cursor-pointer hover:border-amber-500/40 transition-all group"
          >
            <div>
              <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">Hackathon / Competition</span>
              <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-amber-300 transition-colors">1st Place Overall in Tech Marathon</h3>
              <p className="text-gray-400 text-sm mt-2 max-w-xl">
                Engineered a complete end-to-end tech solution under high pressure, evaluated by technical judges on architecture, innovation, and value delivery. Click to view photo.
              </p>
            </div>
            <div className="shrink-0 px-6 py-3 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-300 font-bold text-sm">
              🏆 Marathon Winner
            </div>
          </div>

          <div
            onClick={() => setErickInfo(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setErickInfo(true)}
            className="rounded-2xl bg-gradient-to-r from-cyan-500/10 via-transparent to-transparent border border-cyan-500/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-cyan-500/40 transition-all cursor-pointer group"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-gray-950 border-2 border-cyan-500/40 shrink-0 shadow-lg p-1.5 flex items-center justify-center">
                <img 
                  src={erickFotoImg} 
                  alt="Wanderley Ariel and Erick Wendel" 
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>

              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <UserCheck size={14} /> Family & Technical Role Model
                </span>
                <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors">Cousin & Tech Reference: Erick Wendel</h3>
                <p className="text-gray-400 text-sm mt-2 max-w-xl leading-relaxed">
                  Inspired and guided by my cousin <strong className="text-white">Erick Wendel</strong>, an international tech speaker, Google Developer Expert (GDE), Microsoft MVP, and Node.js specialist. His guidance drives my commitment to code quality, performance, and continuous learning.
                </p>
              </div>
            </div>

            <div className="shrink-0 px-5 py-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-bold text-xs uppercase tracking-wider">
              ⭐ Clique para saber mais
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DOS VÍDEOS ORGANIZADA POR CATEGORIAS */}
      <section id="videos" className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-800/60">
        
        {/* CABEÇALHO COM TRÊS ABAS DE SELEÇÃO */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-3">
              <Video size={14} /> Video Showcase
            </div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Play className="text-cyan-400" /> Featured Videos & Code Demos
            </h2>
            <p className="text-gray-400 mt-2">
              Selecione uma categoria abaixo para alternar entre vídeos de programação e prática de inglês.
            </p>
          </div>

          {/* TRÊS BOTÕES DE SELEÇÃO DE VÍDEO */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0 bg-gray-900/80 p-1.5 rounded-xl border border-gray-800">
            <button
              onClick={() => setCategoriaAtiva('programacao')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
                categoriaAtiva === 'programacao'
                  ? 'bg-cyan-500 text-black shadow-lg font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <FileCode2 size={14} /> Programação / IA Demos
            </button>

            <button
              onClick={() => setCategoriaAtiva('ingles')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
                categoriaAtiva === 'ingles'
                  ? 'bg-emerald-500 text-black shadow-lg font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Globe size={14} /> English Practice
            </button>

            <button
              onClick={() => setCategoriaAtiva('outros')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
                categoriaAtiva === 'outros'
                  ? 'bg-purple-500 text-white shadow-lg font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Layers size={14} /> Outros
            </button>
          </div>
        </div>

        {/* ABA 1: VÍDEOS DE PROGRAMAÇÃO E IA */}
        {categoriaAtiva === 'programacao' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoListProgramacao.map((video) => (
              <div 
                key={video.id}
                onClick={() => setVideoAtivo(video.videoUrl)}
                className="group rounded-2xl bg-gray-900/40 border border-gray-800 p-5 hover:border-cyan-500/50 transition-all cursor-pointer hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full h-44 bg-gray-950 rounded-xl overflow-hidden border border-gray-800 flex items-center justify-center mb-4 group-hover:border-cyan-500/30 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />
                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all z-10 shadow-lg">
                      <Play size={20} className="ml-0.5" />
                    </div>
                    <span className="absolute bottom-2.5 right-2.5 bg-black/80 px-2 py-0.5 rounded text-[11px] font-mono text-cyan-300 z-10 border border-cyan-500/30">
                      {video.duration}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-cyan-400 font-medium uppercase tracking-wider">
                    {video.tag}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2 group-hover:text-cyan-300 transition-colors leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4">
                    {video.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Assistir Demonstração</span> &rarr;
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ABA 2: VÍDEOS DE INGLÊS */}
        {categoriaAtiva === 'ingles' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoListIngles.map((video) => (
              <div 
                key={video.id}
                onClick={() => setVideoAtivo(video.videoUrl)}
                className="group rounded-2xl bg-gray-900/40 border border-gray-800 p-5 hover:border-emerald-500/50 transition-all cursor-pointer hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full h-40 bg-gray-950 rounded-xl overflow-hidden border border-gray-800 flex items-center justify-center mb-4 group-hover:border-emerald-500/30 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-black transition-all z-10 shadow-lg">
                      <Play size={20} className="ml-0.5" />
                    </div>
                    <span className="absolute bottom-2.5 right-2.5 bg-black/80 px-2 py-0.5 rounded text-[11px] font-mono text-gray-300 z-10">
                      {video.duration}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-emerald-400 font-medium uppercase tracking-wider">
                    {video.tag}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2 group-hover:text-emerald-300 transition-colors leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4">
                    {video.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Watch Video</span> &rarr;
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ABA 3: OUTROS VÍDEOS */}
        {categoriaAtiva === 'outros' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videoListOutros.map((video) => (
              <div 
                key={video.id}
                onClick={() => setVideoAtivo(video.videoUrl)}
                className="group rounded-2xl bg-gray-900/40 border border-gray-800 p-5 hover:border-purple-500/50 transition-all cursor-pointer hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full h-44 bg-gray-950 rounded-xl overflow-hidden border border-gray-800 flex items-center justify-center mb-4 group-hover:border-purple-500/30 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/50 text-purple-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all z-10 shadow-lg">
                      <Play size={20} className="ml-0.5" />
                    </div>
                    <span className="absolute bottom-2.5 right-2.5 bg-black/80 px-2 py-0.5 rounded text-[11px] font-mono text-gray-300 z-10">
                      {video.duration}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-purple-400 font-medium uppercase tracking-wider">
                    {video.tag}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2 group-hover:text-purple-300 transition-colors leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4">
                    {video.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Assistir Vídeo</span> &rarr;
                </div>
              </div>
            ))}
          </div>
        )}

      </section>

      {/* GESTURE-BASED MATH VIDEO */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-800/60">
        <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-gray-900/40 to-cyan-500/10 p-6 sm:p-10 shadow-[0_0_30px_rgba(16,185,129,0.08)]">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest">
              Gesture-Based Mathematics
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
              Making Math More Accessible Through Gestures
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              I created a gesture-based mathematics project to help children and people who have difficulty learning math. The project makes learning more interactive, accessible, and engaging.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-gray-800 bg-black shadow-2xl">
            <video
              src={videoMatematica}
              controls
              preload="metadata"
              className="w-full aspect-video object-contain"
              aria-label="Gesture-based mathematics project demonstration"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-gray-800 bg-[#080b0f] py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-white font-bold text-lg">Wanderley Ariel Santos da Silva</p>
            <p className="text-gray-500 text-sm">Carapicuíba, SP - Brazil • Available for Remote or On-site Work</p>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-cyan-500/50 transition-all">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-cyan-500/50 transition-all">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94z"/>
              </svg>
            </a>
            <a href="mailto:seu-email@gmail.com" className="p-3 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-cyan-500/50 transition-all">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>

      {/* MODAL DOS VÍDEOS */}
      {videoAtivo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setVideoAtivo(null)}
        >
          <div 
            className="relative bg-gray-900 border border-gray-800 rounded-2xl max-w-3xl w-full p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setVideoAtivo(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-gray-800/60 p-2 rounded-full transition-colors z-10"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Video className="text-cyan-400" size={20} /> Video Player
            </h3>

            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-800 bg-black">
              <video 
                src={videoAtivo} 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* MODAL DA FOTO DA MARATONA */}
      {fotoMaratona && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setFotoMaratona(false)}
        >
          <div 
            className="relative bg-gray-900 border border-gray-800 rounded-2xl max-w-2xl w-full p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setFotoMaratona(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-gray-800/60 p-2 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
              <Trophy className="text-amber-400" size={20} /> 1st Place Marathon Day
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Winning 1st place in the Tech Marathon and receiving the award laptop.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              I was invited to participate in a programming marathon organized by Layers.Education. My team and I won first place, receiving a laptop, backpack, mouse, and gaming accessories.
            </p>

            <div className="rounded-xl overflow-hidden border border-gray-800 max-h-[70vh]">
              <img 
                src={fotoMaratonaImg} 
                alt="Marathon Victory" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* MODAL SOBRE ERICK WENDEL */}
      {erickInfo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
          onClick={() => setErickInfo(false)}
        >
          <div
            className="relative bg-gradient-to-b from-gray-900 to-gray-950 border border-cyan-500/30 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-cyan-500/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setErickInfo(false)}
                className="absolute top-4 right-4 z-10 text-gray-300 hover:text-white bg-black/50 hover:bg-cyan-500/30 p-2.5 rounded-full transition-colors"
              aria-label="Fechar informações"
            >
              <X size={20} />
            </button>

            <div className="p-4 sm:p-6">
              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 bg-black">
                <img
                  src={erickFotoImg}
                  alt="Wanderley Ariel and Erick Wendel"
                  className="w-full max-h-[65vh] object-contain"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent h-24 pointer-events-none" />
              </div>

              <div className="pt-8 pb-3 text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-white flex justify-center items-center gap-2">
                  <UserCheck className="text-cyan-400" size={24} /> Erick Wendel
                </h3>
                <p className="text-cyan-400/80 text-xs uppercase tracking-[0.25em] mt-2">Family & Technical Role Model</p>
              </div>

              <div className="mt-4 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5 sm:p-6">
                <p className="text-gray-300 leading-relaxed text-center sm:text-left">
                  Erick Wendel is my cousin. I currently also work with him, contributing my software development and technology skills.
                </p>

                <div className="mt-6 border-t border-cyan-500/20 pt-6 text-left">
                  <h4 className="text-lg font-bold text-white">
                    Open Source Contributor | LocalStudio (Erick Wendel Ecosystem)
                  </h4>
                  <p className="mt-2 text-sm font-semibold text-cyan-300">
                    Role: Open Source Contributor / Technical Documentation
                  </p>
                  <p className="mt-3 text-gray-300 leading-relaxed">
                    Directly contributed to improving and structuring tutorials and documentation for <strong className="text-white">LocalStudio</strong>, an open source tool focused on presentations and local Web AI using Chrome APIs, WebGPU, and in-browser AI processing.
                  </p>
                  <h5 className="mt-5 text-sm font-bold uppercase tracking-wider text-cyan-300">
                    Key Contributions
                  </h5>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-300">
                    <li>Created and refined English Getting Started guides for users and developers.</li>
                    <li>Mapped and documented <code className="text-cyan-200">.pptx</code> import workflows and local AI features, including translation and prompt-based generation.</li>
                    <li>Validated code and contribution standards in the project&apos;s official repository.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}