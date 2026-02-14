import Header from "./components/Header"
import ProjectTable from "./components/ProjectTable"
import { mockProjects } from "./data/mockProjects"
import { useProjectFilters } from "./hooks/useProjectFilters"

function App() {
 
  const { search, setSearch, filteredProjects, setStatusFilter, statusFilter } = useProjectFilters(mockProjects);
  
  const totalProjects: number = filteredProjects.length

  return (
    <div className="min-h-screen bg-gray-100 pb-10">
      <Header totalProject={totalProjects}/> 
      
     
      <div className="max-w-4xl mx-auto px-5 mt-5">
        <input
          type="text"
          placeholder="Search projects or clients..."
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white"
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
        <select 
          className="p-3 border border-gray-300 rounded-lg bg-white shadow-sm outline-none"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Statuses</option>
          <option value="Active">Active</option>
          <option value="On Hold">On Hold</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      
      <ProjectTable project={filteredProjects}/>
    </div>
  )
}

export default App