import {Component, OnInit} from '@angular/core';
import {Project} from '../../models/Project';
import {API} from '../../services/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectService} from '../../services/project.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-edit-project',
  templateUrl: '../new-project/new-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService]
})
export class EditProjectComponent implements OnInit {

  public project: Project;
  public sliderName: string;
  public status: string;
  public isEdit: boolean;
  public url2: string;


  afuConfig = {
    multiple: false,
    formatsAllowed: '.jpg, .png, .PNG, .jpeg, .gif',
    maxSize: '50',
    uploadAPI: {
      url: API.url + 'upload-image-project/',
    },
    theme: 'attachPin',
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Elige la imagen del articulo...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) {
    this.sliderName = 'Editando proyecto';
    this.project = new Project('', '', '', '', '', '', '', null, null);
    this.isEdit = true;
    this.url2 = API.url;
  }

  ngOnInit(): void {
    this.getProject();
  }

  onSubmit() {
    this.projectService.updateProjects(this.project._id, this.project).subscribe(res => {
      if (res.status === 'success') {
        this.status = 'success';
        this.project = res.projects;

        swal('¡¡¡En hora Buena!!!', 'El proyecto se ha editado correctamente', 'success');
        this.router.navigate(['/admin']);
      } else {

        this.status = 'error';
        swal('Error', 'El proyecto no se pudo editar');

      }
    }, error => {
      console.log(error);
      this.status = 'error';
    });
  }

  imageUpload(data) {
    let image_data = data.body;
    this.project.image = image_data.image;
  }

  getProject() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.projectService.getProject(id).subscribe(
        response => {
          if (response.project) {
            this.project = response.project;
          } else {
            this.router.navigate(['/portfolio']);
          }
        }, error => {
          this.router.navigate(['/portfolio']);
        }
      );
    });
  }
}
