using Global_Bank_Admin_Management_System.Models;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Global_Bank_Admin_Management_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class AdminController : ControllerBase
    {
        public readonly IConfiguration _config;
        private readonly AdminContext _context;

        public AdminController(IConfiguration config, AdminContext context)
        {
            _config = config;
            _context = context;
        }

        [AllowAnonymous]
        [HttpPost("Login")]
        public IActionResult Login(Admin user)
        {
            var userAvailable = _context.Admins.Where(u => u.UserName == user.UserName && u.Password == user.Password).FirstOrDefault();
            if (userAvailable != null)
            {
                return Ok(new JWTService(_config).GenerateToken(
                     userAvailable.AdminID.ToString(),
                      userAvailable.UserName
                      ));
            }
             return Ok("Failure");
            
        }

    }
}

/*
 * https://localhost:7282/
 */