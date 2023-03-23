import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {Project} from '../../models/Project';
import swal from 'sweetalert';
import {ActivatedRoute, Router} from '@angular/router';
import {API} from '../../services/api.service';
import {AuthService} from '../../services/auth.service';
import {UserI} from '../../models/user';


@Component({
  selector: 'app-more-project',
  templateUrl: './more-project.component.html',
  styleUrls: ['./more-project.component.css'],
  providers: [ProjectService]
})
export class MoreProjectComponent implements OnInit {
  public sliderName: string;
  public project: Project;
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
    this.project = new Project('', '', '', '', '', '', '', null, '');
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._projectService.getProject(id).subscribe(
        response => {
          if (response.project) {
            this.project = response.project;
          } else {
            this._router.navigate(['/portfolio']);
          }
        }, error => {
          this._router.navigate(['/portfolio']);
        }
      );
    });
    this.showVideo();
  }

  showVideo() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api/';
    document.body.appendChild(tag);
  }

  deleteProject(id) {
    swal({
      title: '¿Estas seguro?',
      text: 'Una vez eliminado, no podrás recuperar la información',
      icon: 'warning',
      buttons: [true, true],
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        this._projectService.deleteProject(id).subscribe(
          response => {
            swal('Tu proyecto se eliminó correctamente', {
              icon: 'success',
            });
            this._router.navigate(['portfolio']);
          },
          error => {
            this._router.navigate(['portfolio']);
          });
      } else {
        swal('No se borró', 'tu proyecto está a salvo', 'success');
      }

    });
  }
}
