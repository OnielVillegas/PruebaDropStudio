import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiUsersService } from '../services/api-users.service';
import { UserInfoComponent } from '../user-info/user-info.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  usuarios: any;

  constructor(private api: ApiUsersService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.api.getUsuarios().subscribe(
      data => this.usuarios = data,
      err => console.log(err)
    );
  }

  async UserInfo(id: number){
    let params = await this.api.getUsuario(id).toPromise().then(
      data => data,
      err => console.log(err)
    );  

    this.dialog.open(UserInfoComponent,{
      data: params});
  }
}
