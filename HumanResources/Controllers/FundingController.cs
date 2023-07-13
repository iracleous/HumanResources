using Microsoft.AspNetCore.Mvc;

namespace HumanResources.Controllers
{
    public class FundingController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
