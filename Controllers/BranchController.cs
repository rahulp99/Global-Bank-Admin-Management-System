using Global_Bank_Admin_Management_System.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;

namespace Global_Bank_Admin_Management_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class BranchController : ControllerBase
    {
        private readonly AdminContext _context;

        public BranchController(AdminContext adminContext)
        {
            _context = adminContext;
        }

        [Route("getbranch")]
        [HttpGet]
        public IActionResult GetBranch()
        {
            var branches = _context.Branches
                                .Where(p => p.isDeleted == 0);
            return Ok(branches);
        }

        [Route("getonebranch/{id}")]
        [HttpGet]
        public IActionResult GetOneBranch(int id)
        {
            var branch =  _context.Branches
                              .FirstOrDefault(x => x.BranchId == id);
            if (branch == null)
            {
                return NotFound();
            }
            return Ok(branch);
        }

        [Route("deletebranch/{id}")]
        [HttpDelete]
        public IActionResult DeleteBranch(int id)
        {
            var branch = _context.Branches
                            .Where(b => b.BranchId == id)
                            .FirstOrDefault();
            if(branch is not null)
                branch.isDeleted = 1;
            _context.SaveChanges();
            return Ok();
        }

        [Route("addbranch")]
        [HttpPost]
        public IActionResult AddBranch([FromBody]Branch branch)
        {
            branch.BranchId = null;
            _context.Branches.Add(branch);
            _context.SaveChanges();
            return Ok();
        }

        [Route("getbranchids")]
        [HttpGet]
        public IActionResult GetBranchIDs()
        {
            var branchIDs = _context.Branches.Where(x => x.isDeleted == 0).Select(x => x.BranchId).ToList();
            return Ok(branchIDs);
        }
    }
}
