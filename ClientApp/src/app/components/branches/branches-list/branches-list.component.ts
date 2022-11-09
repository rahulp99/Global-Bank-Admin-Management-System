import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Branch } from 'src/app/models/branch.model';
import { BranchesService } from 'src/app/services/branches.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-branches-list',
  templateUrl: './branches-list.component.html',
  styleUrls: ['./branches-list.component.css']
})

// @NgModule({
//   declarations: [
//     //BranchListComponent
//   ],
//   imports: [
//     RouterModule,
//     CommonModule
//   ],});

export class BranchesListComponent implements OnInit {

  branchDetails: Branch = {
    branchId: 0,
    branchName: '',
    branchAddress: '',
    isDeleted: 0
  };
  branches: Branch[] = [];
  constructor(private route: ActivatedRoute, private branchesService: BranchesService, private router: Router) { }

  ngOnInit(): void {
    this.branchesService.getAllBranches().subscribe({
      next: (branches) => {
        this.branches = branches;
        console.log(this.branches);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
}
