import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../models/Comment';
import {API} from '../../services/api.service';
import {AuthService} from '../../services/auth.service';
import swal from 'sweetalert';
import {ProjectService} from '../../services/project.service';
import {Router} from '@angular/router';
import {UserI} from '../../models/user';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [ProjectService]
})
export class CommentsComponent implements OnInit {
  public url: string;
  @Input() comments: Comment[];

  public user: UserI;

  constructor(
    private  _authService: AuthService,
    private _projectService: ProjectService,
    private _router: Router
  ) {
    this.url = API.url;

  }

  ngOnInit(): void {


    var id = window.location.pathname.split('/')
    if (id[1]=='approvo-comment-by-escnil994-admin') {

      this._projectService.updateComment(id[2]).subscribe(
        res=>{
            swal('El comentario de ha sido autorizado!',{icon: 'success'}), 
            this._router.navigate(['/blog']);
          
        }
      )
    }

  }



  deletePost(id) {
    swal({
      title: '¿Estas seguro?',
      text: 'Una vez eliminado, no podrás recuperar la información',
      icon: 'warning',
      buttons: [true, true],
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        this._projectService.deleteComment(id).subscribe(
          response => {
            swal('El comentario se eliminó correctamente', {
              icon: 'success',
            });
            this._router.navigate(['/']);
          },
          error => {
            this._router.navigate(['/']);
          });
      } else {
        swal('No se borró', 'tu post está a salvo', 'success');
      }

    });
  }


}
