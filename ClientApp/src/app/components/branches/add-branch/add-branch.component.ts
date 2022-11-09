import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Branch } from 'src/app/models/branch.model';
import { BranchesService } from 'src/app/services/branches.service';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {

  branchDetails: Branch = {
    branchId: 0,
    branchName: '',
    branchAddress: '',
    isDeleted: 0
  };

  constructor(private route: ActivatedRoute, private branchService: BranchesService, private router: Router) { }

  ngOnInit(): void {
  }

  addBranch(branchDetails: Branch) {
    this.branchService.addBranch(branchDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['branch']);
      }
    });
  }

}
