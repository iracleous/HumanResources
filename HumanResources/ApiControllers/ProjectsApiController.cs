using HumanResources.Models;
using HumanResources.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HumanResources.ApiControllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsApiController : ControllerBase
    {
        private readonly IProjectService _projectService;

        public ProjectsApiController(IProjectService projectService)
        {
            _projectService = projectService;
        }

        [Route ("ping")]
        public string Hello()
        {
            return "hello";
        }
        [Route("employee")]
        public List<Employee> GetEmployees() {
            return  _projectService.GetEmployees();
        }
        [Route("project")]
        public List<Project> GetProjects()
        {
            return  _projectService.GetAllProjectsWithEmployees() ;
        }
    }
}
