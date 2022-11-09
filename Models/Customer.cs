using System.ComponentModel.DataAnnotations;

namespace Global_Bank_Admin_Management_System.Models
{
    public class Customer
    {
        [Key]
        public int AccountNumber { get; set; }
        public int CustomerNumber { get; set; }


        public int BranchId { get; set; }
        public int OpeningBalance { get; set; }
        public DateTime AccountOpeningDate { get; set; }
        public string? AccountType { get; set; }
        public bool AccountStatus { get; set; }
    }
}
