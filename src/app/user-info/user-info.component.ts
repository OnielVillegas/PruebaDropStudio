import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiUsersService } from '../services/api-users.service';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  UserID: number = 0;
  users: any;
  user: any;

  constructor(private api: ApiUsersService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(
      params => this.UserID = params.idUser
    );
  }

  ngOnInit() {
    this.api.getUsuario(this.UserID).toPromise().then(
      data => this.user = data,
      err => console.log(err)
    );

    this.api.getUsuarios().toPromise().then(
      data => this.users = data,
      err => console.log(err)
    );    
  }
}
