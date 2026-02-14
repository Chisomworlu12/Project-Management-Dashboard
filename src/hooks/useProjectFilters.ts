
import { useState, useMemo } from 'react';
import type { Project } from '../types/project';


export function useProjectFilters(allProjects: Project[]) {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      
      const matchesSearch = 
        project.projectName.toLowerCase().includes(search.toLowerCase()) ||
        project.clientName.toLowerCase().includes(search.toLowerCase());
      
      
      const matchesStatus = statusFilter === 'All' || project.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    });
  }, [allProjects, search, statusFilter]);

  return { search, setSearch, statusFilter, setStatusFilter, filteredProjects };
}