namespace HumanResources.Models
{
    public class Project
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public Employee? Employee { get; set; }
        public string? Version { get; set; }

    }
}
