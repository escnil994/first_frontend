import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {UserInfo} from '../../models/user_info';
import {API} from '../../services/api.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  providers: [ProjectService]

})
export class UserInfoComponent implements OnInit {

  public url: string;
  public user: UserInfo[];

  public sliderName: string;

  constructor(
    private _projectService: ProjectService
  ) {
    this.url = API.url;
    this.sliderName = 'Mi portafolio';
  }


  ngOnInit(): void {
    this._projectService.getUserInfo().subscribe(res => {
      if (res.user) {
        this.user = res.user;
      }
    }, error => {
      console.log(error);
    });
  }

}
