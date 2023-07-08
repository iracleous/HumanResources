using HumanResources.Models;
using Microsoft.EntityFrameworkCore;

namespace HumanResources.HrDbContenxts
{
    public class HrDbContext:DbContext
    {
        public DbSet<Employee> Employees { get; set; }


        public HrDbContext()
        {

        }

        public HrDbContext(DbContextOptions<HrDbContext> options)
       : base(options)
        {
        }

    }
}
