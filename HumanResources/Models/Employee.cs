namespace HumanResources.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string JobTitle { get; set; }
        public decimal Salary    { get; set; }
        public DateTime HiringDate { get; set; }

    }
}
