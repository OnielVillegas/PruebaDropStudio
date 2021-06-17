import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUsersService } from '../services/api-users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  usuarios: any;

  constructor(private api: ApiUsersService, private router: Router) { }

  ngOnInit() {
    this.api.getUsuarios().subscribe(
      data => this.usuarios = data,
      err => console.log(err)
    );
  }

  pageUserInfo(id: number){
    this.router.navigate(['/info'], { queryParams: { idUser: id } });
  }
}
