import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import swal from 'sweetalert';
import {ActivatedRoute, Router} from '@angular/router';
import {API} from '../../services/api.service';
import {AuthService} from '../../services/auth.service';
import {Post} from '../../models/Posts';
import {UserI} from '../../models/user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [ProjectService]

})
export class PostComponent implements OnInit {
  public sliderName: string;
  public post: Post;
  public url: string;
  public user: UserI;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute,
    public authService: AuthService
  ) {
    this.sliderName = 'Mas información del proyecto';
    this.url = API.url;
    this.post = new Post('', '', '', '', '', '', null, null);
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._projectService.getPost(id).subscribe(
        response => {
          if (response.post) {
            this.post = response.post;
          } else {
            this._router.navigate(['/blog']);
          }
        }, error => {
          this._router.navigate(['/blog']);
        }
      );
    });
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
        this._projectService.deletePost(id).subscribe(
          response => {
            swal('Tu proyecto se eliminó correctamente', {
              icon: 'success',
            });
            this._router.navigate(['blog']);
          },
          error => {
            this._router.navigate(['blog']);
          });
      } else {
        swal('No se borró', 'tu post está a salvo', 'success');
      }

    });
  }

}
