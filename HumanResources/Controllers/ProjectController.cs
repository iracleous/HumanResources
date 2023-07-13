using HumanResources.HrDbContenxts;
using HumanResources.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HumanResources.Controllers
{
    public class ProjectController : Controller
    {

        private readonly HrDbContext _context;

        public ProjectController(HrDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            return View( _context
                .Projects
                .Include("Employee")
                .ToList()
                );
        }


        public IActionResult FundedProjects()
        {
            return View(_context
                .Projects
                .Where(project => project.Version=="2")
                .Include("Employee")
                .ToList()
                );
        }




        public IActionResult News()
        {
            return View();
        }
 
        public IActionResult NewProject()
        {
            return View(_context
                .Employees
                .ToList());
        }

        [HttpPost]
        public IActionResult DoNewProject([Bind("Name")] Project project, 
            [Bind("EmployeeId")] int employeeId)
        {

            _context.Projects.Add(project);
            var employee = _context.Employees.Find(employeeId);
            project.Employee = employee;
            _context.SaveChanges();
            return RedirectToAction(nameof(Index));
        }



    }
}
