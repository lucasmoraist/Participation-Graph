import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  items: any[] = []

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getItems().subscribe(data => {
      this.items = data;
    })
  }

}
