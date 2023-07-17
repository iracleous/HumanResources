using HumanResources.HrDbContenxts;
using HumanResources.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace HumanResources.Services
{
    public class ProjectService : IProjectService
    {
        private readonly HrDbContext _context;

        public ProjectService(HrDbContext context)
        {
            _context = context;
        }

      

        public List<Project> GetAllProjectsFunded()
        {
           return _context
                            .Projects
                            .Where(project => project.Version == "2")
                            .Include("Employee")
                            .ToList();
        }

        public List<Project> GetAllProjectsWithEmployees()
        {
            return  _context
                             .Projects
                             .Include("Employee")
                             .ToList();
        }

        public List<Employee> GetEmployees()
        {
            return _context.Employees.ToList();
        }

        public bool SaveProject(Project project, int employeeId)
        {
            _context.Projects.Add(project);
            var employee = _context.Employees.Find(employeeId);
            project.Employee = employee;
            _context.SaveChanges();
            return true;
        }
    }
}
