import { Component, OnInit } from '@angular/core';
import { MyDataServiceService } from '../../service/my-data-service.service';
import { MatListModule } from '@angular/material';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  providers: [MyDataServiceService],
})
export class UserlistComponent implements OnInit {

  constructor(private myDataService: MyDataServiceService) { }

  ngOnInit() {
  }

}
