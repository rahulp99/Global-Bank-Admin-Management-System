using Microsoft.EntityFrameworkCore;

namespace Global_Bank_Admin_Management_System.Models
{
    public class AdminContext: DbContext
    {
        public readonly IConfiguration _config;
        public AdminContext(DbContextOptions options, IConfiguration config) : base(options)
        {
            _config = config;
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Admin>().HasData(
                new Admin { AdminID = 1, UserName = "Admin1", Password = "admin1" },
                new Admin { AdminID = 2, UserName = "Admin2", Password = "admin2" },
                new Admin { AdminID = 3, UserName = "Admin3", Password = "admin3" });


            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Branch>().HasData(
                new Branch { BranchId = 1, BranchName = "HYD", BranchAddress = "Hyderabad", isDeleted = 0 },
                new Branch { BranchId = 2, BranchName = "BAN", BranchAddress = "Bangalore", isDeleted = 0 },
                new Branch { BranchId = 3, BranchName = "CHN", BranchAddress = "Chennai", isDeleted = 1 });

            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Customer>().HasData(
                new Customer { AccountNumber = 101, 
                    CustomerNumber = 10011, 
                    BranchId = 2, 
                    OpeningBalance = 85006,
                    AccountOpeningDate = new DateTime(2011, 11, 11, 11, 11, 11),
                    AccountType = "Savings",
                    AccountStatus = true
                },
                new Customer { AccountNumber = 102, 
                    CustomerNumber = 10078, 
                    BranchId = 1, 
                    OpeningBalance = 1045,
                    AccountOpeningDate = new DateTime(2001, 4, 12, 11, 11, 11),
                    AccountType = "Current",
                    AccountStatus = true
                },
                new Customer
                {
                    AccountNumber = 103,
                    CustomerNumber = 8524,
                    BranchId = 1,
                    OpeningBalance = 1332001,
                    AccountOpeningDate = new DateTime(1990, 4, 12, 23, 40, 03),
                    AccountType = "Savings",
                    AccountStatus = false
                }); ;

        }
        public DbSet<Branch> Branches { get; set; }
        public DbSet<Admin> Admins { get; set; }
        public DbSet<Customer> Customers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_config.GetConnectionString("MyDBConnection"));
        }
    }
    
}
