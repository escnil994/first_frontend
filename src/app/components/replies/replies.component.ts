import {Component, OnInit} from '@angular/core';
import {Comment} from '../../models/Comment';
import {ProjectService} from '../../services/project.service';
import {ActivatedRoute, Router} from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-replies',
  templateUrl: './replies.component.html',
  styleUrls: ['./replies.component.css'],
  providers: [ProjectService]
})
export class RepliesComponent implements OnInit {
  public comment: Comment;
  public status: string;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.comment = new Comment('', '', '', '', null);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this._projectService.newComment(this.comment).subscribe(res => {
      console.log(res);
      if (res.status === 'success') {
        this.status = 'success';
        this.comment = res.comments;
        swal('Exitoso', 'Comentario agregado exitosamente', 'success');
        this._router.navigate(['/portfolio']);
      }
    }, error => {
      console.log(error);
      this.status = 'error';
    });
  }

}
