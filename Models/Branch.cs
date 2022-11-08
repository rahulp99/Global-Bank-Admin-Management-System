namespace Global_Bank_Admin_Management_System.Models
{
    public class Branch
    {
        public int BranchId { get; set; }
        public string BranchName { get; set; } = null!;
        public string BranchAddress { get; set; } = null!;
        public int isDeleted { get; set; }
    }
}
