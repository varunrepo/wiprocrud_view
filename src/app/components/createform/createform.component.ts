import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.scss']
})
export class CreateformComponent implements OnInit {

  form: FormGroup;
  userDetails: User;

  constructor(public fb: FormBuilder,public userService :UserService,private router: Router) { }

  ngOnInit(): void {
    this.initiallize();
    this.form = this.fb.group({
      patientNo: ['', Validators.required],
      name: ['', [Validators.required]],
      
    });
  }

  save() {
    this.userService.createUser(this.userDetails).subscribe(res =>{
      this.router.navigate(['/view']);
    })


  }

  initiallize() {
    this.userDetails = {
      name: "",
      patientNo: ""
    }
  }


}
