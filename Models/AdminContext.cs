using Microsoft.EntityFrameworkCore;

namespace Global_Bank_Admin_Management_System.Models
{
    public class AdminContext: DbContext
    {
        public AdminContext(DbContextOptions options): base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Admin>().HasData(
                new Admin { AdminID = 1, UserName = "Admin1", Password = "admin1" },
                new Admin { AdminID = 2, UserName = "Admin2", Password = "admin2" },
                new Admin { AdminID = 3, UserName = "Admin3", Password = "admin3" });

        }
        public DbSet<Admin> Admins { get; set; }
    }
    
}
