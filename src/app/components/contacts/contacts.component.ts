import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {UserInfo} from '../../models/user_info';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ProjectService]
})
export class ContactsComponent implements OnInit {


  public user: UserInfo;
  public sliderName: string;

  constructor(private _projectService: ProjectService) {
    this.user = new UserInfo('', '', '', null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
    this.sliderName = 'Medios de contacto';
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
