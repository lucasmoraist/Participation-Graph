import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  obj = {
    firstName: '',
    lastName: '',
    participation: ''
  }

  handleSubmit(){

    console.log(this.obj);
    
    this.userService.postItems(this.obj).subscribe(response => {
      console.log(response);
    })

    this.obj.firstName = ''
    this.obj.lastName = ''
    this.obj.participation = ''
  }

}
