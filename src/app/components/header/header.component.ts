import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {UserI} from '../../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public name: string;
  public logo: string;
  public user: UserI;

  constructor(
    public authService: AuthService
  ) {
    this.name = 'Nilson Escobar';
    this.logo = 'Escnil994';
  }

  ngOnInit(): void {
  }


}
