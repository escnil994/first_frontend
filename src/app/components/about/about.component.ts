import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {UserInfo} from '../../models/user_info';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [ProjectService]
})
export class AboutComponent implements OnInit {

  public user: UserInfo;
  public sliderName: string;

  constructor(private _projectService: ProjectService) {
    this.user = new UserInfo('', '', '', null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
    this.sliderName = 'Acerca de';
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
