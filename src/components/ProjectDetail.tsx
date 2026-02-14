import type { Project } from "../types/project";


interface ProjectDetailProps {
  seleProject: Project;
  onClose: () => void;
  getStatusStyles: (status: string) => string;
}

export default function ProjectDetail({ seleProject, onClose, getStatusStyles }: ProjectDetailProps) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      
      <div 
        className="fixed inset-0 bg-black/30 backdrop-blur-sm" 
        onClick={onClose} 
      />

  
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl p-6 overflow-y-auto">
   
        <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-6">
          <h2 className="text-xl font-bold text-gray-800">Project Details</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-2"
          >
            ✕
          </button>
        </div>

        
        <div className="space-y-6">
          <section>
            <label className="text-xs font-bold text-gray-400 uppercase">Project Name</label>
            <p className="text-lg font-semibold text-gray-900">{seleProject.projectName}</p>
          </section>

          <section className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase">Client</label>
              <p className="text-gray-700">{seleProject.clientName}</p>
            </div>
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase">Status</label>
              <p className="mt-1">
                <span className={`px-2 py-1 text-xs font-bold rounded-full ${getStatusStyles(seleProject.status)}`}>
                  {seleProject.status}
                </span>
              </p>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase">Start Date</label>
              <p className="text-gray-700">{seleProject.startDate}</p>
            </div>
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase">End Date</label>
              <p className="text-gray-700">{seleProject.endDate || "TBD"}</p>
            </div>
          </section>

         
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <label className="text-xs font-bold text-gray-400 uppercase">Budget Allocation</label>
            <p className="text-2xl font-bold text-green-600">
              {seleProject.budget ? `$${seleProject.budget.toLocaleString()}` : "Not Specified"}
            </p>
          </section>

          <section>
            <label className="text-xs font-bold text-gray-400 uppercase">Description</label>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              {seleProject.description || "No additional description available for this project."}
            </p>    
          </section>
        </div>

       
        <div className="mt-10 pt-6 border-t border-gray-300">
          <button 
            onClick={onClose}
            className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Close Panel
          </button>
        </div>
      </div>
    </div>
  );
}