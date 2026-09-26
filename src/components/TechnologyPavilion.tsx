import React, { useState } from 'react';
import { TECHNOLOGY_MILESTONES } from '../data/technologyData';
import { SectionId } from '../types/music';
import { Cpu, ArrowRight, Disc, Radio, CassetteTape, Sparkles, CheckCircle2 } from 'lucide-react';

interface TechnologyPavilionProps {
  onNavigate: (section: SectionId) => void;
  onSelectTopic?: (topic: string) => void;
}

export const TechnologyPavilion: React.FC<TechnologyPavilionProps> = ({ onNavigate, onSelectTopic }) => {
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string>(TECHNOLOGY_MILESTONES[0].id);

  const milestone = TECHNOLOGY_MILESTONES.find(m => m.id === selectedMilestoneId) || TECHNOLOGY_MILESTONES[0];

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="mb-8 border-b border-[#F2D1DC] pb-6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#A24467] font-medium mb-1">
          <span>Galerie des Inventions & Technologies</span>
          <span aria-hidden="true">·</span>
          <span>De la Gravure Manuelle au Traitement Numérique</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2A1620] mb-3">
          L'Évolution Technologique du Son
        </h2>
        <p className="text-sm sm:text-base text-[#6F4E5A] max-w-3xl leading-relaxed">
          Comment les ingénieurs, typographes, acousticiens et électroniciens ont permis à la musique de s'émanciper du corps de l'interprète pour conquérir le monde entier.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Timeline of Inventions */}
        <div className="lg:col-span-4 space-y-2">
          <h3 className="text-xs uppercase tracking-widest text-[#933D5E] font-medium mb-3">
            Frise des Révolutionnaires
          </h3>
          <div className="space-y-1.5 max-h-[700px] overflow-y-auto pr-2">
            {TECHNOLOGY_MILESTONES.map(item => {
              const isSelected = item.id === selectedMilestoneId;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedMilestoneId(item.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#D682A0] shadow-sm ring-1 ring-[#E8A5BD]'
                      : 'bg-[#FFF7F9] border-[#F2D7DF] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-[#95536B] mb-1">
                    <span className="font-mono font-bold text-[#8F254B]">{item.year}</span>
                    <span className="text-[10px] text-[#AC6A82] truncate max-w-[140px]">{item.inventors[0]}</span>
                  </div>
                  <div className={`font-serif font-bold text-sm ${isSelected ? 'text-[#8F254B]' : 'text-[#3B1F2A]'}`}>
                    {item.invention}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Detailed Invention Exhibit */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-[#EDCED8] p-6 sm:p-8 shadow-sm">
          
          <div className="border-b border-[#F4D2DD] pb-5 mb-6">
            <div className="flex items-center gap-2 text-xs text-[#8E4962] font-mono mb-1">
              <span>Année {milestone.year}</span>
              <span aria-hidden="true">·</span>
              <span>Inventeur(s) : {milestone.inventors.join(', ')}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2A1520] mb-2">
              {milestone.invention}
            </h3>
          </div>

          {/* Core Mechanism & Problem Solved */}
          <div className="space-y-4 mb-6">
            <div className="p-4 rounded-xl bg-[#FFF9FA] border border-[#F4DBE3]">
              <h4 className="text-xs uppercase tracking-widest text-[#933D5E] font-semibold mb-1">
                Fonctionnement Mécanique & Physique
              </h4>
              <p className="text-xs sm:text-sm text-[#3E212E] leading-relaxed">
                {milestone.mechanism}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FFF5F8] border border-[#F2CDDA]">
              <h4 className="text-xs uppercase tracking-widest text-[#8F254B] font-semibold mb-1">
                Le Défi & Problème Résolu
              </h4>
              <p className="text-xs sm:text-sm text-[#4E2E3C] leading-relaxed">
                {milestone.problemSolved}
              </p>
            </div>
          </div>

          {/* Two-Column Impact Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-white border border-[#F2D7DF]">
              <h5 className="text-xs uppercase tracking-widest text-[#8F3354] font-semibold mb-2">
                Impact sur la Création Artistique
              </h5>
              <p className="text-xs text-[#523340] leading-relaxed">
                {milestone.impactOnCreation}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#F2D7DF]">
              <h5 className="text-xs uppercase tracking-widest text-[#8F3354] font-semibold mb-2">
                Impact sur la Diffusion & Société
              </h5>
              <p className="text-xs text-[#523340] leading-relaxed">
                {milestone.impactOnDiffusion}
              </p>
            </div>
          </div>

          {/* Before vs After Transformational Contrast */}
          <div className="p-4 rounded-xl bg-[#FAF5F7] border border-[#ECD3DC] mb-6">
            <h5 className="text-xs uppercase tracking-widest text-[#8F254B] font-semibold mb-3">
              Rupture Historique : Avant vs Après
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white rounded-lg border border-[#F2D7DF]">
                <span className="font-bold text-[#8A3753] block mb-1">Avant cette invention :</span>
                <span className="text-[#553441]">{milestone.beforeState}</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-[#F2D7DF]">
                <span className="font-bold text-[#2A7550] block mb-1">Après son adoption :</span>
                <span className="text-[#553441]">{milestone.afterState}</span>
              </div>
            </div>
          </div>

          {/* Cross Links */}
          <div className="pt-4 border-t border-[#F5D5E0] flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-[#7F4458]">
              <span className="font-semibold text-[#8F254B]">À explorer ensuite :</span>
              <span>{milestone.relatedTopics.join(' · ')}</span>
            </div>
            <button
              onClick={() => onNavigate('instruments')}
              className="flex items-center gap-1 font-semibold text-[#8F254B] hover:text-[#5F122E] transition-colors cursor-pointer"
            >
              <span>Voir le Thérémine & Synthétiseur</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
