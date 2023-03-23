import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {Comment} from '../../models/Comment';
import {API} from '../../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-get-comments',
  templateUrl: './get-comments.component.html',
  styleUrls: ['./get-comments.component.css'],
  providers: [ProjectService]
})
export class GetCommentsComponent implements OnInit {

  public sliderName: string;
  public url: string;
  public comments: Comment[];

  constructor(
    private _projectService: ProjectService,
    private _router: Router
  ) {
    this.url = API.url;
    this.sliderName = 'Mostrando todos los comentarios';
  }

  ngOnInit(): void {
    this._projectService.getComments().subscribe(response => {
        if (response.comments) {
          
          this.comments = response.comments;
        }
      },
      error => {
        console.log(error);
      });
  }

}
