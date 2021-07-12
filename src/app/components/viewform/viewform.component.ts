import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.scss']
})
export class ViewformComponent implements OnInit {

  userDetails: User[];

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(res => {
      this.userDetails = res;
    })
  }

}
