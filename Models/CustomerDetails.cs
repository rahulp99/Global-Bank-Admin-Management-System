using System.ComponentModel.DataAnnotations;

namespace Global_Bank_Admin_Management_System.Models
{
    public class CustomerDetails
    {
        [Key]
        public int CustomerId { get; set; }
        public string? CustomerName { get; set; }
        public string? Address { get; set; }
    }
}
