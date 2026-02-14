import { useState } from "react";
import ProjectDetail from "./ProjectDetail";
import type { Project } from "../types/project";


export default function ProjectTable({project}: {project: Project[]}) 
{ 
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    
    const handleRowClick = (pro: Project) => {
        setSelectedProject(pro);
    }

    const getStatusStyles = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-700";
      case "on hold":
        return "bg-yellow-100 text-yellow-700";
      case "completed":
        return "bg-gray-300 text-gray-700";
      default:
        return "bg-indigo-50 text-indigo-700";
    }
  };

    return(
        <>
        <div className="m-5">
            <div className="border border-gray-300 rounded-xl overflow-hidden ">
                <div className="max-h-64 overflow-y-auto ">
           <table className="w-full border-collapse border border-gray-300  border-rounded-3xl max-h-20 overflow-y-auto">
            <tr>
                <th>PROJECT NAME</th>
                <th>CLIENT</th>
                <th>STATUS</th>
            </tr>
           {project.map((pro: Project) => <tr onClick={() => handleRowClick(pro)} key={pro.id} className="border-t border-gray-300">
                <td className="p-3 truncate max-w-50">{pro.projectName}</td>
                <td>{pro.clientName}</td>
                <td><span className={`px-2 py-1 text-xs font-bold rounded-full ${getStatusStyles(pro.status)}`}>{pro.status}</span></td>
                 
            </tr> )}
           
            </table> 
        </div>
        </div>
        </div>
        {selectedProject && (<ProjectDetail seleProject={selectedProject} onClose={() => setSelectedProject(null)} getStatusStyles={getStatusStyles}/>)}
            </>
    )
}