import { PillLabel } from "../ui/PillLabel";
import { Project } from "../../types";
import { copy } from "../../data/copy";

interface ProjectMetaOverlayProps {
  item: Project;
}

export const ProjectMetaOverlay = ({
  item
}: ProjectMetaOverlayProps) => {
  const { common } = copy;

  return (
    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-30 translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <PillLabel className="bg-white/10 border-white/20">
          {item.category}
        </PillLabel>
        {item.status === 'coming_soon' && (
          <PillLabel className="bg-blue-500/20 border-blue-500/30 text-blue-400">
            {common.comingSoon}
          </PillLabel>
        )}
      </div>
      
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 leading-tight tracking-tight">
        {item.title}
      </h3>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 text-[10px] uppercase tracking-widest font-bold text-white/40">
        {item.client && (
          <div className="flex items-center gap-1.5">
            <span className="opacity-50">{common.client}:</span>
            <span className="text-white/60">{item.client}</span>
          </div>
        )}
        {item.agency && (
          <div className="flex items-center gap-1.5">
            <span className="opacity-50">{common.agency}:</span>
            <span className="text-white/60">{item.agency}</span>
          </div>
        )}
        {item.year && (
          <div className="flex items-center gap-1.5">
            <span className="opacity-50">{common.year}:</span>
            <span className="text-white/60">{item.year}</span>
          </div>
        )}
      </div>

      <p className="text-xs sm:text-sm text-white/60 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500 delay-100 line-clamp-2 leading-relaxed max-w-sm">
        {item.shortDescription}
      </p>
    </div>
  );
};
