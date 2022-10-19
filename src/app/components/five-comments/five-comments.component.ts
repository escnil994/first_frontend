import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../services/project.service';


@Component({
  selector: 'app-five-comments',
  templateUrl: './five-comments.component.html',
  styleUrls: ['./five-comments.component.css'],
  providers: [ProjectService]
})
export class FiveCommentsComponent implements OnInit {

  comments: Comment[];

  constructor(
    private _projectService: ProjectService
  ) {
  }

  ngOnInit(): void {
    this._projectService.getComments(true).subscribe(response => {
        if (response.comments) {
          this.comments = response.comments;
        }
      },
      error => {
        console.log(error);
      });
  }

}
