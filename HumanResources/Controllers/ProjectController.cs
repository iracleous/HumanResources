using HumanResources.HrDbContenxts;
using HumanResources.Models;
using HumanResources.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HumanResources.Controllers
{
    public class ProjectController : Controller
    {

        private readonly IProjectService _projectService;


        public ProjectController(  IProjectService projectService)
        {
          
            _projectService = projectService;
        }

        public IActionResult Index()
        {
             return View(_projectService.GetAllProjectsWithEmployees());
        }


        public IActionResult FundedProjects()
        {
           return View(_projectService.GetAllProjectsFunded());
        }




        public IActionResult News()
        {
            return View();
        }
 
        public IActionResult NewProject()
        {
            ViewData["employees"] = _projectService.GetEmployees();
            return View(_projectService.GetEmployees());
        }

        [HttpPost]
        public IActionResult DoNewProject([Bind("Name")] Project project, 
            [Bind("EmployeeId")] int employeeId)
        {

            _projectService.SaveProject(project, employeeId);
            //  return RedirectToAction(nameof(Index));
            return RedirectToAction("Index", "Project", new { area = "" });
        }



    }
}
