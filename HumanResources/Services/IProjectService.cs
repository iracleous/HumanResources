using HumanResources.Models;

namespace HumanResources.Services
{
    public interface IProjectService
    {
        public List<Project> GetAllProjectsWithEmployees();
        public List<Employee>   GetEmployees();
        public List<Project> GetAllProjectsFunded();

        public bool SaveProject(Project project, int employeeId);
    }
}
