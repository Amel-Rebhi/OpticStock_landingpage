// import React, { useState, useEffect, useRef } from 'react';
// import * as THREE from 'three';

// export interface LandingPageProps {
//   onEnterApp?: () => void;
//    githubUrl?: string;
// }

// interface Embedded3DViewerProps {
//   onSelectSlot?: (slotName: string) => void;
// }

// // --- COMPOSANT LANDING PAGE (Exporté par défaut) ---
// export default function LandingPage({ onEnterApp,
//     githubUrl = 'https://github.com/Amel-Rebhi/OpticStock_landingpage' }: LandingPageProps): React.JSX.Element {
//   const [email, setEmail] = useState<string>('');
//   const [siteName, setSiteName] = useState<string>('');
//   const [registered, setRegistered] = useState<boolean>(false);
//   const [inspectionTarget, setInspectionTarget] = useState<string>('ARM-A1 - E1 - Case C1');

//   const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (email) setRegistered(true);
//   };

//   return (
//     <div className="relative min-h-screen bg-[#0B1120] text-slate-200 font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
//       {/* Grille technique de fond */}
//       <div 
//         className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" 
//       />

//       {/* Header / Navbar */}
//       <header className="sticky top-0 z-50 bg-[#0B1120]/90 backdrop-blur-md border-b border-slate-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="w-8 h-8 rounded bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center font-mono font-bold text-slate-950 text-xs shadow-lg shadow-amber-500/10 tracking-tighter">
//               3D
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="text-base font-bold tracking-tight text-white font-mono">
//                 OptiStock<span className="text-amber-400">3D</span>
//               </span>
//               <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 hidden sm:inline-block">
//                 v2.4-PROD
//               </span>
//             </div>
//           </div>

//           <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-slate-400">
//             <a href="#digital-twin" className="hover:text-amber-400 transition-colors">Jumeau Numérique</a>
//             <a href="#modules" className="hover:text-amber-400 transition-colors">Architecture Système</a>
//             <a href="#specs" className="hover:text-amber-400 transition-colors">Benchmark &amp; Moteur</a>
//             <a href="#integration" className="hover:text-amber-400 transition-colors">Intégration WMS</a>
//             <a
//   href="https://github.com/Firas-Hajlaoui/OptiStock-3D"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="hidden sm:flex items-center gap-2 px-3 py-2 text-xs font-mono text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 rounded transition-colors"
// >
//   <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//     <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
//   </svg>
//   <span>GitHub</span>
// </a>
//           </nav>

//           <div className="flex items-center gap-3">
//             <button
//               onClick={onEnterApp}
//               className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 active:scale-95 rounded transition-all flex items-center gap-2 cursor-pointer font-mono shadow-md shadow-amber-500/20"
//             >
//               <span>Lancer le Visualiseur 3D</span>
//               <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//                 <path d="M5 12h14M12 5l7 7-7 7"/>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="relative pt-12 lg:pt-20 pb-16 border-b border-slate-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="grid lg:grid-cols-12 gap-10 items-center">
            
//             <div className="lg:col-span-7 space-y-6">
//               <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0F172A] border border-slate-800 text-xs font-mono text-amber-400">
//                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
//                 Moteur d'Optimisation Spatiale &amp; Digital Twin WMS
//               </div>

//               <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
//                 Contrôle volumétrique et gestion d'entrepôt en <span className="text-amber-400 font-mono">temps réel</span>.
//               </h1>

//               <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
//                 OptiStock 3D synchronise la géométrie des rayonnages physiques avec vos bases de données de composants et produits. Analyse thermique des rotations, détection optique de références multi-catalogues (SKU / OEM / EAN) et configuration paramétrique 2D/3D.
//               </p>

//               <div className="pt-2 flex flex-wrap gap-4 font-mono text-xs">
//                 <button
//                   onClick={onEnterApp}
//                   className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-amber-500/10 active:scale-95"
//                 >
//                   <span>Démarrer l'Instance Métier</span>
//                   <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path d="M5 12h14M12 5l7 7-7 7"/>
//                   </svg>
//                 </button>
//                 <a
//                   href="#specs"
//                   className="px-5 py-3.5 bg-[#0F172A] hover:bg-slate-800 border border-slate-800 text-slate-300 rounded transition-all flex items-center gap-2"
//                 >
//                   Spécifications Techniques
//                 </a>
//               </div>

//               {/* Télémétrie */}
//               <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80 max-w-xl font-mono">
//                 <div className="bg-slate-900/40 p-3 rounded border border-slate-800/50">
//                   <span className="text-slate-500 text-[10px] block uppercase">Fréquence calcul</span>
//                   <span className="text-lg sm:text-xl font-bold text-white tracking-tight">60 FPS</span>
//                   <span className="text-[10px] text-emerald-400 block mt-0.5">Rendu WebGL 2.0</span>
//                 </div>
//                 <div className="bg-slate-900/40 p-3 rounded border border-slate-800/50">
//                   <span className="text-slate-500 text-[10px] block uppercase">Résolution spatiale</span>
//                   <span className="text-lg sm:text-xl font-bold text-white tracking-tight">&lt; 1 cm</span>
//                   <span className="text-[10px] text-slate-400 block mt-0.5">Tolérance casier</span>
//                 </div>
//                 <div className="bg-slate-900/40 p-3 rounded border border-slate-800/50">
//                   <span className="text-slate-500 text-[10px] block uppercase">Synchronisation</span>
//                   <span className="text-lg sm:text-xl font-bold text-white tracking-tight">Bi-direction</span>
//                   <span className="text-[10px] text-amber-400 block mt-0.5">REST / SAP / Excel</span>
//                 </div>
//               </div>
//             </div>

//             {/* Inspecteur 3D */}
//             <div className="lg:col-span-5" id="digital-twin">
//               <div className="bg-[#0F172A] border border-slate-800 rounded-xl overflow-hidden shadow-2xl relative">
                
//                 <div className="px-4 py-3 bg-[#0B1120] border-b border-slate-800 flex items-center justify-between text-xs font-mono">
//                   <div className="flex items-center gap-2">
//                     <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
//                     <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
//                     <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
//                     <span className="text-slate-400 ml-2 text-[11px]">Console :: Inspecteur d'Emplacement</span>
//                   </div>
//                   <span className="text-emerald-400 flex items-center gap-1.5 text-[11px]">
//                     <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
//                     EN LIGNE
//                   </span>
//                 </div>

//                 <div className="relative h-64 sm:h-72 w-full bg-slate-950">
//                   <Embedded3DViewer onSelectSlot={(slotName: string) => setInspectionTarget(slotName)} />
//                   <div className="absolute top-2 right-2 bg-slate-900/80 backdrop-blur border border-slate-800 px-2.5 py-1 rounded text-[10px] font-mono text-slate-400 pointer-events-none">
//                     🖱️ Touche/Glisse pour faire pivoter la vue 3D
//                   </div>
//                 </div>

//                 <div className="p-5 space-y-4 font-mono text-xs border-t border-slate-800 bg-[#0F172A]">
//                   <div className="p-3 bg-[#0B1120] border border-slate-800/80 rounded-lg">
//                     <div className="flex justify-between items-center text-slate-500 text-[11px] mb-1">
//                       <span>IDENTIFIANT EMPLACEMENT</span>
//                       <span className="text-amber-400">ZONE-A // ÉTAGE 1</span>
//                     </div>
//                     <div className="text-sm font-bold text-white flex items-center gap-2">
//                       <span className="w-2 h-2 rounded-full bg-amber-400"></span>
//                       {inspectionTarget}
//                     </div>
//                     <div className="text-[11px] text-slate-400 mt-1">Largeur utile: 204 cm · Séparateur: Métallique réglable</div>
//                   </div>

//                   <div className="space-y-2 border-t border-slate-800/60 pt-3">
//                     <div className="flex justify-between items-center py-1 border-b border-slate-800/40">
//                       <span className="text-slate-400">Désignation Produit</span>
//                       <span className="font-semibold text-slate-200">Variateur Moteur Universel</span>
//                     </div>
//                     <div className="flex justify-between items-center py-1 border-b border-slate-800/40">
//                       <span className="text-slate-400">Code Produit (SKU / Ref)</span>
//                       <span className="text-amber-300 font-bold">SKU-98234-X7</span>
//                     </div>
//                     <div className="flex justify-between items-center py-1 border-b border-slate-800/40">
//                       <span className="text-slate-400">État des stocks</span>
//                       <span className="text-emerald-400 font-bold">6 unités (Conforme)</span>
//                     </div>
//                     <div className="flex justify-between items-center py-1 border-b border-slate-800/40">
//                       <span className="text-slate-400">Indice de rotation (ABC)</span>
//                       <span className="text-white">14.5 rot./an <span className="text-amber-400 font-semibold">[Forte]</span></span>
//                     </div>
//                     <div className="flex justify-between items-center py-1">
//                       <span className="text-slate-400">Dimensions Colis</span>
//                       <span className="text-slate-300">62 × 40 × 30 cm</span>
//                     </div>
//                   </div>

//                   <div className="pt-2">
//                     <button
//                       onClick={onEnterApp}
//                       className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 active:bg-slate-900 border border-slate-700 text-slate-100 rounded text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
//                     >
//                       <span>Ouvrir dans la scène 3D globale</span>
//                       <svg className="w-3.5 h-3.5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                         <circle cx="12" cy="12" r="10"/>
//                         <path d="m10 15 5-3-5-3v6Z"/>
//                       </svg>
//                     </button>
//                   </div>
//                 </div>

//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* Modules */}
//       <section id="modules" className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-800 pb-6 mb-12">
//           <div>
//             <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">Modules Opérationnels</span>
//             <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Conçu pour tout environnement logistique &amp; industriel</h2>
//           </div>
//           <p className="text-xs font-mono text-slate-500 mt-2 md:mt-0">NORME DE STOCKAGE INDUSTRIEL WMS-SPATIAL</p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-6">
//           <div className="bg-[#0F172A] border border-slate-800 p-6 rounded-xl hover:border-amber-500/50 transition-all duration-300 group">
//             <div className="w-10 h-10 rounded bg-[#0B1120] border border-slate-800 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition-transform">
//               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="m21 16-9.5 5.5L2 16"/>
//                 <path d="m21 8-9.5 5.5L2 8"/>
//                 <path d="M11.5 2.5 21 8v8l-9.5 5.5L2 16V8l9.5-5.5Z"/>
//               </svg>
//             </div>
//             <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">Module 01</span>
//             <h3 className="text-base font-bold text-white mt-1 mb-2">Cartographie &amp; Plan de Masse 2D</h3>
//             <p className="text-xs text-slate-400 leading-relaxed">
//               Définition paramétrique des armoires, hauteurs d'étages et cases inégales. Intègre les cotes millimétrées réelles du bâtiment et l'orientation des travées.
//             </p>
//           </div>

//           <div className="bg-[#0F172A] border border-slate-800 p-6 rounded-xl hover:border-amber-500/50 transition-all duration-300 group">
//             <div className="w-10 h-10 rounded bg-[#0B1120] border border-slate-800 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition-transform">
//               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
//                 <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
//                 <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
//                 <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
//                 <circle cx="12" cy="12" r="3"/>
//                 <path d="m16 16-1.5-1.5"/>
//               </svg>
//             </div>
//             <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">Module 02</span>
//             <h3 className="text-base font-bold text-white mt-1 mb-2">Reconnaissance Multi-Catalogues</h3>
//             <p className="text-xs text-slate-400 leading-relaxed">
//               Analyse visuelle des étiquettes et emballages par caméra. Réconciliation automatique des codes SKU/EAN/OEM et mise à jour décentralisée sans saisie manuelle.
//             </p>
//           </div>

//           <div className="bg-[#0F172A] border border-slate-800 p-6 rounded-xl hover:border-amber-500/50 transition-all duration-300 group">
//             <div className="w-10 h-10 rounded bg-[#0B1120] border border-slate-800 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition-transform">
//               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M12 2v20"/>
//                 <path d="m17 5-5-3-5 3"/>
//                 <path d="m17 19-5 3-5-3"/>
//                 <path d="M2 12h20"/>
//                 <path d="m5 7-3 5 3 5"/>
//                 <path d="m19 7 3 5-3 5"/>
//               </svg>
//             </div>
//             <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">Module 03</span>
//             <h3 className="text-base font-bold text-white mt-1 mb-2">Algorithmique de Slotting ABC</h3>
//             <p className="text-xs text-slate-400 leading-relaxed">
//               Calcul de réorganisation ergonomique : réaffectation assistée des références à haute fréquence de rotation sur les niveaux d'accès ergonomiques prioritaires.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Spécifications */}
//       <section id="specs" className="py-16 bg-[#0F172A] border-y border-slate-800">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6">
//           <div className="border-b border-slate-800 pb-4 mb-6 flex justify-between items-center">
//             <h2 className="text-base font-bold text-white font-mono uppercase tracking-wide">
//               Spécifications Logicielles &amp; Normes d'Intégration
//             </h2>
//             <span className="text-xs font-mono text-slate-500">ISO/IEC 25010</span>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full text-left font-mono text-xs border-collapse">
//               <thead>
//                 <tr className="border-b border-slate-800 text-slate-500">
//                   <th className="py-3 px-4">SOUS-SYSTÈME</th>
//                   <th className="py-3 px-4">PROTOCOLE / FORMAT</th>
//                   <th className="py-3 px-4">PERFORMANCE MESURÉE</th>
//                   <th className="py-3 px-4">STATUS</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-800/60 text-slate-300">
//                 <tr>
//                   <td className="py-3.5 px-4 font-semibold text-white">Moteur Graphique 3D</td>
//                   <td className="py-3.5 px-4">WebGL 2.0 / GLTF / Three.js Pipeline</td>
//                   <td className="py-3.5 px-4 text-emerald-400">Latence &lt; 16.6ms (60 FPS constants)</td>
//                   <td className="py-3.5 px-4">
//                     <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px]">
//                       Opérationnel
//                     </span>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="py-3.5 px-4 font-semibold text-white">Parser Multi-Catalogues</td>
//                   <td className="py-3.5 px-4">Format universel SKU / EAN-13 / QR Code</td>
//                   <td className="py-3.5 px-4 text-slate-400">Extraction instantanée &lt; 50ms</td>
//                   <td className="py-3.5 px-4">
//                     <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px]">
//                       Certifié
//                     </span>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="py-3.5 px-4 font-semibold text-white">Stockage &amp; Résilience</td>
//                   <td className="py-3.5 px-4">Local-First (LocalStorage v3) + Sync REST</td>
//                   <td className="py-3.5 px-4 text-slate-400">Disponibilité hors-ligne 100%</td>
//                   <td className="py-3.5 px-4">
//                     <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px]">
//                       Actif
//                     </span>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="py-3.5 px-4 font-semibold text-white">Connecteur ERP &amp; WMS</td>
//                   <td className="py-3.5 px-4">API REST / Webhooks / XLSX / CSV</td>
//                   <td className="py-3.5 px-4 text-slate-400">Import/Export bidirectionnel</td>
//                   <td className="py-3.5 px-4">
//                     <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800 text-[10px]">
//                       Standard
//                     </span>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>

//       {/* Formulaire */}
// {/* --- SECTION ROADMAP / OBJECTIFS FUTURS --- */}
//       <section id="roadmap" className="py-20 bg-[#0F172A]/50 border-t border-slate-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="mb-12">
//             <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">Feuille de Route &amp; Perspective</span>
//             <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Objectifs et Développements Futurs du Projet</h2>
//             <p className="text-xs font-mono text-slate-400 mt-2 max-w-2xl">
//               OptiStock 3D évolue continuellement pour intégrer les dernières avancées technologiques en IA, IoT et Réalité Augmentée dans l'industrie logistique.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
//             {/* Phase 1 */}
//             <div className="p-5 rounded-xl bg-[#0B1120] border border-slate-800 space-y-3">
//               <div className="flex justify-between items-center text-amber-400 text-[10px]">
//                 <span>PHASE 1</span>
//                 <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">IA &amp; Prédiction</span>
//               </div>
//               <h4 className="text-sm font-bold text-white">Algorithme d'IA Prédictive</h4>
//               <p className="text-slate-400 leading-relaxed text-[11px]">
//                 Modèles IA pour anticiper les pics de demande et réarranger préventivement l'entrepôt durant les heures creuses (Auto-Slotting IA).
//               </p>
//             </div>

//             {/* Phase 2 */}
//             <div className="p-5 rounded-xl bg-[#0B1120] border border-slate-800 space-y-3">
//               <div className="flex justify-between items-center text-amber-400 text-[10px]">
//                 <span>PHASE 2</span>
//                 <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400">WebXR / AR</span>
//               </div>
//               <h4 className="text-sm font-bold text-white">Scanner en Réalité Augmentée</h4>
//               <p className="text-slate-400 leading-relaxed text-[11px]">
//                 Guidage visuel AR sur lunettes connectées ou smartphones pour assister les préparateurs dans la localisation exacte du casier cible.
//               </p>
//             </div>

            

//             {/* Phase 4 */}
//             <div className="p-5 rounded-xl bg-[#0B1120] border border-slate-800 space-y-3">
//               <div className="flex justify-between items-center text-amber-400 text-[10px]">
//                 <span>PHASE 4</span>
//                 <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400">Robotique / AGV</span>
//               </div>
//               <h4 className="text-sm font-bold text-white">Routage Flotte AGV / AMR</h4>
//               <p className="text-slate-400 leading-relaxed text-[11px]">
//                 Calcul du trajet spatial 3D optimal pour les robots autonomes de manutention, réduisant le temps de parcours et d'usure des batteries.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="integration" className="py-20 max-w-4xl mx-auto px-4 sm:px-6">
//         <div className="bg-[#0F172A] border border-slate-800 p-8 sm:p-12 rounded-xl shadow-xl">
//           <div className="max-w-2xl">
//             <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">Déploiement Sur Site</span>
//             <h2 className="text-2xl font-bold text-white mt-1">Demande de documentation &amp; Spécifications de déploiement</h2>
//             <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
//               Obtenez le cahier d'intégration pour adapter OptiStock 3D à l'infrastructure et à la base de données de votre entreprise.
//             </p>
//           </div>

//           <form onSubmit={handleRegister} className="mt-8 grid sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-[11px] font-mono text-slate-400 mb-1 uppercase">Entité / Entreprise / Site Logistique</label>
//               <input
//                 type="text"
//                 required
//                 value={siteName}
//                 onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSiteName(e.target.value)}
//                 placeholder="Ex : Entrepôt Central - Site Ouest"
//                 className="w-full bg-[#0B1120] border border-slate-800 rounded px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 font-mono"
//               />
//             </div>

//             <div>
//               <label className="block text-[11px] font-mono text-slate-400 mb-1 uppercase">Email d'Exploitation</label>
//               <input
//                 type="email"
//                 required
//                 value={email}
//                 onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
//                 placeholder="responsable.logistique@entreprise.com"
//                 className="w-full bg-[#0B1120] border border-slate-800 rounded px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 font-mono"
//               />
//             </div>

//             <div className="sm:col-span-2 pt-2">
//               <button
//                 type="submit"
//                 className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold font-mono rounded transition-colors uppercase tracking-wider cursor-pointer shadow-md shadow-amber-500/10"
//               >
//                 Générer le Dossier Technique d'Architecture
//               </button>
//             </div>
//           </form>

//           {registered && (
//             <div className="mt-4 p-3.5 bg-slate-900 border border-amber-500/40 text-amber-300 text-xs font-mono rounded flex items-center gap-3">
//               <svg className="w-5 h-5 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M20 6 9 17l-5-5"/>
//               </svg>
//               <span>Accréditation confirmée. Le guide d'implémentation a été transmis à l'adresse indiquée.</span>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Footer */}
//     {/* Footer avec Lien GitHub */}
//       <footer className="border-t border-slate-800/80 py-8 bg-[#0B1120] font-mono text-[11px] text-slate-500">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
//           <div>OptiStock 3D Engineering Suite · Visual Warehouse Management Framework</div>
          
//           <div className="flex items-center gap-4 text-slate-400">
//             <a
//               href="https://github.com/vFiras-Hajlaoui/OptiStock-3D"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
//             >
//               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                 <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
//               </svg>
//               <span>Code Source GitHub</span>
//             </a>
//             <span>·</span>
//             <span className="text-slate-600">Licence Open-Core / WMS Standard · 2026</span>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// // --- MOTEUR 3D THREE.JS EMBARQUÉ ---
// function Embedded3DViewer({ onSelectSlot }: Embedded3DViewerProps): React.JSX.Element {
//   const mountRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const container = mountRef.current;
//     if (!container) return;

//     const width = container.clientWidth;
//     const height = container.clientHeight;

//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0x050811);
//     scene.fog = new THREE.FogExp2(0x050811, 0.08);

//     const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
//     camera.position.set(4, 3, 5);
//     camera.lookAt(0, 0, 0);

//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(width, height);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     renderer.shadowMap.enabled = true;
//     container.appendChild(renderer.domElement);

//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
//     scene.add(ambientLight);

//     const dirLight = new THREE.DirectionalLight(0xfab005, 1.2);
//     dirLight.position.set(5, 8, 5);
//     dirLight.castShadow = true;
//     scene.add(dirLight);

//     const blueSpot = new THREE.PointLight(0x38bdf8, 1.5, 10);
//     blueSpot.position.set(-3, 2, -1);
//     scene.add(blueSpot);

//     const gridHelper = new THREE.GridHelper(12, 12, 0x334155, 0x1e293b);
//     gridHelper.position.y = -1.2;
//     scene.add(gridHelper);

//     const rackGroup = new THREE.Group();
//     scene.add(rackGroup);

//     const frameMaterial = new THREE.MeshStandardMaterial({
//       color: 0x334155,
//       metalness: 0.8,
//       roughness: 0.2,
//     });

//     const pillarGeo = new THREE.BoxGeometry(0.08, 2.8, 0.08);
//     [[-1.2, -0.6], [1.2, -0.6], [-1.2, 0.6], [1.2, 0.6]].forEach(([x, z]) => {
//       const pillar = new THREE.Mesh(pillarGeo, frameMaterial);
//       pillar.position.set(x, 0.2, z);
//       rackGroup.add(pillar);
//     });

//     const shelfGeo = new THREE.BoxGeometry(2.5, 0.05, 1.25);
//     const shelfHeights = [-1.0, -0.1, 0.8, 1.5];
//     const shelfMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.5 });

//     shelfHeights.forEach((y) => {
//       const shelf = new THREE.Mesh(shelfGeo, shelfMat);
//       shelf.position.set(0, y, 0);
//       rackGroup.add(shelf);
//     });

//     const boxMaterials = [
//       new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.4 }),
//       new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.4 }),
//       new THREE.MeshStandardMaterial({ color: 0x059669, roughness: 0.4 }),
//       new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.6 }),
//     ];

//     const slots: THREE.Mesh[] = [];
//     const boxGeo = new THREE.BoxGeometry(0.45, 0.35, 0.5);

//     for (let level = 0; level < 3; level++) {
//       const y = shelfHeights[level] + 0.2;
//       for (let col = -2; col <= 2; col++) {
//         if (Math.random() > 0.2) {
//           const mat = boxMaterials[Math.floor(Math.random() * boxMaterials.length)];
//           const box = new THREE.Mesh(boxGeo, mat);
//           const x = col * 0.48;
//           const z = (Math.random() - 0.5) * 0.4;
//           box.position.set(x, y, z);

//           box.userData = {
//             name: `ARM-A1 - E${level + 1} - Case C${col + 3}`,
//             level: level + 1,
//             col: col + 3,
//           };

//           rackGroup.add(box);
//           slots.push(box);
//         }
//       }
//     }

//     const raycaster = new THREE.Raycaster();
//     const mouse = new THREE.Vector2();

//     let isDragging = false;
//     let previousMousePosition = { x: 0, y: 0 };

//     const onMouseDown = (e: MouseEvent) => {
//       isDragging = true;
//       previousMousePosition = { x: e.clientX, y: e.clientY };
//     };

//     const onMouseMove = (e: MouseEvent) => {
//       if (!isDragging) return;
//       const deltaX = e.clientX - previousMousePosition.x;
//       const deltaY = e.clientY - previousMousePosition.y;

//       rackGroup.rotation.y += deltaX * 0.01;
//       rackGroup.rotation.x += deltaY * 0.005;
//       rackGroup.rotation.x = Math.max(-0.4, Math.min(0.6, rackGroup.rotation.x));

//       previousMousePosition = { x: e.clientX, y: e.clientY };
//     };

//     const onMouseUp = () => {
//       isDragging = false;
//     };

//     const onClick = (e: MouseEvent) => {
//       const rect = container.getBoundingClientRect();
//       mouse.x = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
//       mouse.y = -((e.clientY - rect.top) / container.clientHeight) * 2 + 1;

//       raycaster.setFromCamera(mouse, camera);
//       const intersects = raycaster.intersectObjects(slots);

//       if (intersects.length > 0) {
//         const selected = intersects[0].object as THREE.Mesh;
//         if (onSelectSlot && selected.userData?.name) {
//           onSelectSlot(selected.userData.name as string);
//         }
//         selected.scale.set(1.15, 1.15, 1.15);
//         setTimeout(() => selected.scale.set(1, 1, 1), 300);
//       }
//     };

//     const domElement = renderer.domElement;
//     domElement.addEventListener('mousedown', onMouseDown);
//     window.addEventListener('mousemove', onMouseMove);
//     window.addEventListener('mouseup', onMouseUp);
//     domElement.addEventListener('click', onClick);

//     let animationFrameId: number;
//     const animate = () => {
//       animationFrameId = requestAnimationFrame(animate);
//       if (!isDragging) {
//         rackGroup.rotation.y += 0.003;
//       }
//       renderer.render(scene, camera);
//     };

//     animate();

//     const handleResize = () => {
//       if (!container) return;
//       const w = container.clientWidth;
//       const h = container.clientHeight;
//       camera.aspect = w / h;
//       camera.updateProjectionMatrix();
//       renderer.setSize(w, h);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       domElement.removeEventListener('mousedown', onMouseDown);
//       window.removeEventListener('mousemove', onMouseMove);
//       window.removeEventListener('mouseup', onMouseUp);
//       domElement.removeEventListener('click', onClick);
//       window.removeEventListener('resize', handleResize);
//       if (container.contains(domElement)) {
//         container.removeChild(domElement);
//       }
//     };
//   }, [onSelectSlot]);

//   return <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />;
// }


import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

export interface LandingPageProps {
  onEnterApp?: () => void;
  githubUrl?: string;
}

interface Embedded3DViewerProps {
  onSelectSlot?: (slotName: string) => void;
}

export default function LandingPage({ 
  onEnterApp,
  githubUrl = 'https://github.com/Amel-Rebhi/OpticStock_landingpage' 
}: LandingPageProps): React.JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [siteName, setSiteName] = useState<string>('');
  const [registered, setRegistered] = useState<boolean>(false);
  const [inspectionTarget, setInspectionTarget] = useState<string>('ARM-A1 - E1 - Case C1');

  // --- 1. INJECTION DYNAMIQUE DE TAILWIND (Infaillible) ---
  useEffect(() => {
    if (!document.getElementById('dynamic-tailwind-cdn')) {
      const script = document.createElement('script');
      script.id = 'dynamic-tailwind-cdn';
      script.src = 'https://cdn.tailwindcss.com';
      document.head.appendChild(script);
    }
    // Force la couleur de fond sombre du body du navigateur
    document.body.style.backgroundColor = '#0B1120';
    document.body.style.margin = '0';
    document.body.style.color = '#e2e8f0';
  }, []);

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) setRegistered(true);
  };

  return (
    <div 
      style={{ backgroundColor: '#0B1120', minHeight: '100vh', color: '#e2e8f0', fontFamily: 'system-ui, sans-serif' }}
      className="relative min-h-screen bg-[#0B1120] text-slate-200 font-sans antialiased selection:bg-amber-500 selection:text-slate-950"
    >
      {/* --- 2. FEUILLE DE STYLE DE SECOURS (Empêche définitivement les icônes géantes) --- */}
      <style>{`
        body, html, #root {
          background-color: #0B1120 !important;
          color: #e2e8f0 !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        svg {
          max-width: 100%;
        }
        .svg-fixed-sm {
          width: 16px !important;
          height: 16px !important;
          min-width: 16px !important;
          max-width: 16px !important;
          display: inline-block !important;
        }
        .svg-fixed-md {
          width: 20px !important;
          height: 20px !important;
          min-width: 20px !important;
          max-width: 20px !important;
          display: inline-block !important;
        }
      `}</style>

      {/* Grille technique de fond */}
      <div 
        className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" 
      />

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-[#0B1120]/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center font-mono font-bold text-slate-950 text-xs shadow-lg shadow-amber-500/10 tracking-tighter">
              3D
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base font-bold tracking-tight text-white font-mono">
                OptiStock<span className="text-amber-400">3D</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 hidden sm:inline-block">
                v2.4-PROD
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-slate-400">
            <a href="#digital-twin" className="hover:text-amber-400 transition-colors">Jumeau Numérique</a>
            <a href="#modules" className="hover:text-amber-400 transition-colors">Architecture Système</a>
            <a href="#roadmap" className="hover:text-amber-400 transition-colors">Vision &amp; Feuille de Route</a>
            <a href="#specs" className="hover:text-amber-400 transition-colors">Spécifications</a>
            <a href="#integration" className="hover:text-amber-400 transition-colors">Intégration WMS</a>
          </nav>

          <div className="flex items-center gap-3">
            {/* Bouton GitHub sécurisé */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-3 py-2 text-xs font-mono text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 rounded transition-colors"
            >
              <svg 
                style={{ width: '16px', height: '16px' }}
                className="svg-fixed-sm fill-current" 
                viewBox="0 0 24 24"
              >
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>

            <button
              onClick={onEnterApp}
              className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 active:scale-95 rounded transition-all flex items-center gap-2 cursor-pointer font-mono shadow-md shadow-amber-500/20"
            >
              <span>Lancer le Visualiseur 3D</span>
              <svg 
                style={{ width: '14px', height: '14px' }} 
                className="w-3.5 h-3.5" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 lg:pt-20 pb-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0F172A] border border-slate-800 text-xs font-mono text-amber-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Moteur d'Optimisation Spatiale &amp; Digital Twin WMS
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Contrôle volumétrique et gestion d'entrepôt en <span className="text-amber-400 font-mono">temps réel</span>.
              </h1>

              <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                OptiStock 3D synchronise la géométrie des rayonnages physiques avec vos bases de données de composants et produits. Analyse thermique des rotations, détection optique de références multi-catalogues (SKU / OEM / EAN) et configuration paramétrique 2D/3D.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 font-mono text-xs">
                <button
                  onClick={onEnterApp}
                  className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-amber-500/10 active:scale-95"
                >
                  <span>Démarrer l'Instance Métier</span>
                  <svg 
                    style={{ width: '16px', height: '16px' }}
                    className="w-4 h-4" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
                <a
                  href="#roadmap"
                  className="px-5 py-3.5 bg-[#0F172A] hover:bg-slate-800 border border-slate-800 text-slate-300 rounded transition-all flex items-center gap-2"
                >
                  Vision &amp; Objectifs Futurs
                </a>
              </div>

              {/* Télémétrie */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80 max-w-xl font-mono">
                <div className="bg-slate-900/40 p-3 rounded border border-slate-800/50">
                  <span className="text-slate-500 text-[10px] block uppercase">Fréquence calcul</span>
                  <span className="text-lg sm:text-xl font-bold text-white tracking-tight">60 FPS</span>
                  <span className="text-[10px] text-emerald-400 block mt-0.5">Rendu WebGL 2.0</span>
                </div>
                <div className="bg-slate-900/40 p-3 rounded border border-slate-800/50">
                  <span className="text-slate-500 text-[10px] block uppercase">Résolution spatiale</span>
                  <span className="text-lg sm:text-xl font-bold text-white tracking-tight">&lt; 1 cm</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Tolérance casier</span>
                </div>
                <div className="bg-slate-900/40 p-3 rounded border border-slate-800/50">
                  <span className="text-slate-500 text-[10px] block uppercase">Synchronisation</span>
                  <span className="text-lg sm:text-xl font-bold text-white tracking-tight">Bi-direction</span>
                  <span className="text-[10px] text-amber-400 block mt-0.5">REST / SAP / Excel</span>
                </div>
              </div>
            </div>

            {/* Inspecteur 3D */}
            <div className="lg:col-span-5" id="digital-twin">
              <div className="bg-[#0F172A] border border-slate-800 rounded-xl overflow-hidden shadow-2xl relative">
                <div className="px-4 py-3 bg-[#0B1120] border-b border-slate-800 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="text-slate-400 ml-2 text-[11px]">Console :: Inspecteur d'Emplacement</span>
                  </div>
                  <span className="text-emerald-400 flex items-center gap-1.5 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    EN LIGNE
                  </span>
                </div>

                <div className="relative h-64 sm:h-72 w-full bg-slate-950">
                  <Embedded3DViewer onSelectSlot={(slotName: string) => setInspectionTarget(slotName)} />
                  <div className="absolute top-2 right-2 bg-slate-900/80 backdrop-blur border border-slate-800 px-2.5 py-1 rounded text-[10px] font-mono text-slate-400 pointer-events-none">
                    🖱️ Touche/Glisse pour faire pivoter la vue 3D
                  </div>
                </div>

                <div className="p-5 space-y-4 font-mono text-xs border-t border-slate-800 bg-[#0F172A]">
                  <div className="p-3 bg-[#0B1120] border border-slate-800/80 rounded-lg">
                    <div className="flex justify-between items-center text-slate-500 text-[11px] mb-1">
                      <span>IDENTIFIANT EMPLACEMENT</span>
                      <span className="text-amber-400">ZONE-A // ÉTAGE 1</span>
                    </div>
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                      {inspectionTarget}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">Largeur utile: 204 cm · Séparateur: Métallique réglable</div>
                  </div>

                  <div className="space-y-2 border-t border-slate-800/60 pt-3">
                    <div className="flex justify-between items-center py-1 border-b border-slate-800/40">
                      <span className="text-slate-400">Désignation Produit</span>
                      <span className="font-semibold text-slate-200">Variateur Moteur Universel</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-800/40">
                      <span className="text-slate-400">Code Produit (SKU / Ref)</span>
                      <span className="text-amber-300 font-bold">SKU-98234-X7</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-800/40">
                      <span className="text-slate-400">État des stocks</span>
                      <span className="text-emerald-400 font-bold">6 unités (Conforme)</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-800/40">
                      <span className="text-slate-400">Indice de rotation (ABC)</span>
                      <span className="text-white">14.5 rot./an <span className="text-amber-400 font-semibold">[Forte]</span></span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-slate-400">Dimensions Colis</span>
                      <span className="text-slate-300">62 × 40 × 30 cm</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={onEnterApp}
                      className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 active:bg-slate-900 border border-slate-700 text-slate-100 rounded text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Ouvrir dans la scène 3D globale</span>
                      <svg 
                        style={{ width: '14px', height: '14px' }}
                        className="w-3.5 h-3.5 text-amber-400" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10"/>
                        <path d="m10 15 5-3-5-3v6Z"/>
                      </svg>
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Modules */}
      <section id="modules" className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-800 pb-6 mb-12">
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">Modules Opérationnels</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Conçu pour tout environnement logistique &amp; industriel</h2>
          </div>
          <p className="text-xs font-mono text-slate-500 mt-2 md:mt-0">NORME DE STOCKAGE INDUSTRIEL WMS-SPATIAL</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#0F172A] border border-slate-800 p-6 rounded-xl hover:border-amber-500/50 transition-all duration-300">
            <div className="w-10 h-10 rounded bg-[#0B1120] border border-slate-800 flex items-center justify-center text-amber-400 mb-5">
              <svg 
                style={{ width: '20px', height: '20px' }}
                className="svg-fixed-md" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="m21 16-9.5 5.5L2 16"/><path d="m21 8-9.5 5.5L2 8"/><path d="M11.5 2.5 21 8v8l-9.5 5.5L2 16V8l9.5-5.5Z"/>
              </svg>
            </div>
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">Module 01</span>
            <h3 className="text-base font-bold text-white mt-1 mb-2">Cartographie &amp; Plan de Masse 2D</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Définition paramétrique des armoires, hauteurs d'étages et cases inégales. Intègre les cotes millimétrées réelles du bâtiment et l'orientation des travées.
            </p>
          </div>

          <div className="bg-[#0F172A] border border-slate-800 p-6 rounded-xl hover:border-amber-500/50 transition-all duration-300">
            <div className="w-10 h-10 rounded bg-[#0B1120] border border-slate-800 flex items-center justify-center text-amber-400 mb-5">
              <svg 
                style={{ width: '20px', height: '20px' }}
                className="svg-fixed-md" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/><path d="m16 16-1.5-1.5"/>
              </svg>
            </div>
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">Module 02</span>
            <h3 className="text-base font-bold text-white mt-1 mb-2">Reconnaissance Multi-Catalogues</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Analyse visuelle des étiquettes et emballages par caméra. Réconciliation automatique des codes SKU/EAN/OEM et mise à jour décentralisée sans saisie manuelle.
            </p>
          </div>

          <div className="bg-[#0F172A] border border-slate-800 p-6 rounded-xl hover:border-amber-500/50 transition-all duration-300">
            <div className="w-10 h-10 rounded bg-[#0B1120] border border-slate-800 flex items-center justify-center text-amber-400 mb-5">
              <svg 
                style={{ width: '20px', height: '20px' }}
                className="svg-fixed-md" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M12 2v20"/><path d="m17 5-5-3-5 3"/><path d="m17 19-5 3-5-3"/><path d="M2 12h20"/><path d="m5 7-3 5 3 5"/><path d="m19 7 3 5-3 5"/>
              </svg>
            </div>
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">Module 03</span>
            <h3 className="text-base font-bold text-white mt-1 mb-2">Algorithmique de Slotting ABC</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Calcul de réorganisation ergonomique : réaffectation assistée des références à haute fréquence de rotation sur les niveaux d'accès ergonomiques prioritaires.
            </p>
          </div>
        </div>
      </section>

      {/* Spécifications */}
      <section id="specs" className="py-16 bg-[#0F172A] border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="border-b border-slate-800 pb-4 mb-6 flex justify-between items-center">
            <h2 className="text-base font-bold text-white font-mono uppercase tracking-wide">
              Spécifications Logicielles &amp; Normes d'Intégration
            </h2>
            <span className="text-xs font-mono text-slate-500">ISO/IEC 25010</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-500">
                  <th className="py-3 px-4">SOUS-SYSTÈME</th>
                  <th className="py-3 px-4">PROTOCOLE / FORMAT</th>
                  <th className="py-3 px-4">PERFORMANCE MESURÉE</th>
                  <th className="py-3 px-4">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Moteur Graphique 3D</td>
                  <td className="py-3.5 px-4">WebGL 2.0 / GLTF / Three.js Pipeline</td>
                  <td className="py-3.5 px-4 text-emerald-400">Latence &lt; 16.6ms (60 FPS constants)</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px]">
                      Opérationnel
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Parser Multi-Catalogues</td>
                  <td className="py-3.5 px-4">Format universel SKU / EAN-13 / QR Code</td>
                  <td className="py-3.5 px-4 text-slate-400">Extraction instantanée &lt; 50ms</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px]">
                      Certifié
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Stockage &amp; Résilience</td>
                  <td className="py-3.5 px-4">Local-First (LocalStorage v3) + Sync REST</td>
                  <td className="py-3.5 px-4 text-slate-400">Disponibilité hors-ligne 100%</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px]">
                      Actif
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Connecteur ERP &amp; WMS</td>
                  <td className="py-3.5 px-4">API REST / Webhooks / XLSX / CSV</td>
                  <td className="py-3.5 px-4 text-slate-400">Import/Export bidirectionnel</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800 text-[10px]">
                      Standard
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-20 bg-[#0F172A]/50 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">Feuille de Route &amp; Perspective</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Objectifs et Développements Futurs du Projet</h2>
            <p className="text-xs font-mono text-slate-400 mt-2 max-w-2xl">
              OptiStock 3D évolue continuellement pour intégrer les dernières avancées technologiques en IA, IoT et Réalité Augmentée dans l'industrie logistique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            <div className="p-5 rounded-xl bg-[#0B1120] border border-slate-800 space-y-3">
              <div className="flex justify-between items-center text-amber-400 text-[10px]">
                <span>PHASE 1</span>
                <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">IA &amp; Prédiction</span>
              </div>
              <h4 className="text-sm font-bold text-white">Algorithme d'IA Prédictive</h4>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                Modèles IA pour anticiper les pics de demande et réarranger préventivement l'entrepôt durant les heures creuses (Auto-Slotting IA).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0B1120] border border-slate-800 space-y-3">
              <div className="flex justify-between items-center text-amber-400 text-[10px]">
                <span>PHASE 2</span>
                <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400">WebXR / AR</span>
              </div>
              <h4 className="text-sm font-bold text-white">Scanner en Réalité Augmentée</h4>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                Guidage visuel AR sur lunettes connectées ou smartphones pour assister les préparateurs dans la localisation exacte du casier cible.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0B1120] border border-slate-800 space-y-3">
              <div className="flex justify-between items-center text-amber-400 text-[10px]">
                <span>PHASE 3</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">IoT &amp; Capteurs</span>
              </div>
              <h4 className="text-sm font-bold text-white">Capteurs Volumétriques IoT</h4>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                Intégration de puces ultra-sons et caméras TOF pour détecter automatiquement le niveau de remplissage réel en temps réel.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0B1120] border border-slate-800 space-y-3">
              <div className="flex justify-between items-center text-amber-400 text-[10px]">
                <span>PHASE 4</span>
                <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400">Robotique / AGV</span>
              </div>
              <h4 className="text-sm font-bold text-white">Routage Flotte AGV / AMR</h4>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                Calcul du trajet spatial 3D optimal pour les robots autonomes de manutention, réduisant le temps de parcours et d'usure des batteries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire d'intégration */}
      <section id="integration" className="py-20 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0F172A] border border-slate-800 p-8 sm:p-12 rounded-xl shadow-xl">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">Déploiement Sur Site</span>
            <h2 className="text-2xl font-bold text-white mt-1">Demande de documentation &amp; Spécifications de déploiement</h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              Obtenez le cahier d'intégration pour adapter OptiStock 3D à l'infrastructure et à la base de données de votre entreprise.
            </p>
          </div>

          <form onSubmit={handleRegister} className="mt-8 grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-mono text-slate-400 mb-1 uppercase">Entité / Entreprise / Site Logistique</label>
              <input
                type="text"
                required
                value={siteName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSiteName(e.target.value)}
                placeholder="Ex : Entrepôt Central - Site Ouest"
                className="w-full bg-[#0B1120] border border-slate-800 rounded px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 font-mono"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-slate-400 mb-1 uppercase">Email d'Exploitation</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                placeholder="responsable.logistique@entreprise.com"
                className="w-full bg-[#0B1120] border border-slate-800 rounded px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 font-mono"
              />
            </div>

            <div className="sm:col-span-2 pt-2">
              <button
                type="submit"
                className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold font-mono rounded transition-colors uppercase tracking-wider cursor-pointer shadow-md shadow-amber-500/10"
              >
                Générer le Dossier Technique d'Architecture
              </button>
            </div>
          </form>

          {registered && (
            <div className="mt-4 p-3.5 bg-slate-900 border border-amber-500/40 text-amber-300 text-xs font-mono rounded flex items-center gap-3">
              <svg 
                style={{ width: '20px', height: '20px' }}
                className="svg-fixed-md text-emerald-400 shrink-0" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M20 6 9 17l-5-5"/>
              </svg>
              <span>Accréditation confirmée. Le guide d'implémentation a été transmis à l'adresse indiquée.</span>
            </div>
          )}
        </div>
      </section>

      {/* Footer avec Lien GitHub sécurisé */}
      <footer className="border-t border-slate-800/80 py-8 bg-[#0B1120] font-mono text-[11px] text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>OptiStock 3D Engineering Suite · Visual Warehouse Management Framework</div>
          
          <div className="flex items-center gap-4 text-slate-400">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <svg 
                style={{ width: '16px', height: '16px' }}
                className="svg-fixed-sm fill-current" 
                viewBox="0 0 24 24"
              >
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>Code Source GitHub</span>
            </a>
            <span>·</span>
            <span className="text-slate-600">Licence Open-Core / WMS Standard · 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- MOTEUR 3D THREE.JS EMBARQUÉ ---
function Embedded3DViewer({ onSelectSlot }: Embedded3DViewerProps): React.JSX.Element {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050811);
    scene.fog = new THREE.FogExp2(0x050811, 0.08);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(4, 3, 5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfab005, 1.2);
    dirLight.position.set(5, 8, 5);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const blueSpot = new THREE.PointLight(0x38bdf8, 1.5, 10);
    blueSpot.position.set(-3, 2, -1);
    scene.add(blueSpot);

    const gridHelper = new THREE.GridHelper(12, 12, 0x334155, 0x1e293b);
    gridHelper.position.y = -1.2;
    scene.add(gridHelper);

    const rackGroup = new THREE.Group();
    scene.add(rackGroup);

    const frameMaterial = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.8,
      roughness: 0.2,
    });

    const pillarGeo = new THREE.BoxGeometry(0.08, 2.8, 0.08);
    [[-1.2, -0.6], [1.2, -0.6], [-1.2, 0.6], [1.2, 0.6]].forEach(([x, z]) => {
      const pillar = new THREE.Mesh(pillarGeo, frameMaterial);
      pillar.position.set(x, 0.2, z);
      rackGroup.add(pillar);
    });

    const shelfGeo = new THREE.BoxGeometry(2.5, 0.05, 1.25);
    const shelfHeights = [-1.0, -0.1, 0.8, 1.5];
    const shelfMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.5 });

    shelfHeights.forEach((y) => {
      const shelf = new THREE.Mesh(shelfGeo, shelfMat);
      shelf.position.set(0, y, 0);
      rackGroup.add(shelf);
    });

    const boxMaterials = [
      new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.4 }),
      new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.4 }),
      new THREE.MeshStandardMaterial({ color: 0x059669, roughness: 0.4 }),
      new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.6 }),
    ];

    const slots: THREE.Mesh[] = [];
    const boxGeo = new THREE.BoxGeometry(0.45, 0.35, 0.5);

    for (let level = 0; level < 3; level++) {
      const y = shelfHeights[level] + 0.2;
      for (let col = -2; col <= 2; col++) {
        if (Math.random() > 0.2) {
          const mat = boxMaterials[Math.floor(Math.random() * boxMaterials.length)];
          const box = new THREE.Mesh(boxGeo, mat);
          const x = col * 0.48;
          const z = (Math.random() - 0.5) * 0.4;
          box.position.set(x, y, z);

          box.userData = {
            name: `ARM-A1 - E${level + 1} - Case C${col + 3}`,
            level: level + 1,
            col: col + 3,
          };

          rackGroup.add(box);
          slots.push(box);
        }
      }
    }

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      rackGroup.rotation.y += deltaX * 0.01;
      rackGroup.rotation.x += deltaY * 0.005;
      rackGroup.rotation.x = Math.max(-0.4, Math.min(0.6, rackGroup.rotation.x));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / container.clientHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(slots);

      if (intersects.length > 0) {
        const selected = intersects[0].object as THREE.Mesh;
        if (onSelectSlot && selected.userData?.name) {
          onSelectSlot(selected.userData.name as string);
        }
        selected.scale.set(1.15, 1.15, 1.15);
        setTimeout(() => selected.scale.set(1, 1, 1), 300);
      }
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    domElement.addEventListener('click', onClick);

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isDragging) {
        rackGroup.rotation.y += 0.003;
      }
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElement.removeEventListener('click', onClick);
      window.removeEventListener('resize', handleResize);
      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }
    };
  }, [onSelectSlot]);

  return <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />;
}