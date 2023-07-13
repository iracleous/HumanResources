using HumanResources.HrDbContenxts;
using Microsoft.AspNetCore.Mvc;

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
            return View( _context.Projects.ToList());
        }
        public IActionResult News()
        {


            return View();
        }
    }
}
