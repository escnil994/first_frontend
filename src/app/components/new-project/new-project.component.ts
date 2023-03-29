import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {Project} from '../../models/Project';
import {API} from '../../services/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  providers: [ProjectService]
})
export class NewProjectComponent implements OnInit {

  public project: Project;
  public sliderName: string;
  public status: string;
  public isEdit: boolean;
  public url2: string;


  afuConfig = {
    multiple: false,
    formatsAllowed: '.jpg, .png, .PNG .jpeg, .gif',
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
    this.sliderName = 'Completa la siguiente informacion de tu peoyecto';
    this.project = new Project(null, '', '', '', '', '', '', null, null);
    this.isEdit = false;
    this.url2 = API.url;
  }

  ngOnInit(): void {

  }

  onSubmit() {

    console.log(this.project);
    
    this.projectService.createProject(this.project).subscribe(res => {
      if (res.ok) {
        this.status = 'success';
        this.project = res.projects;

        swal('¡¡¡En hora Buena!!!', 'El proyecto se ha creado correctamente', 'success');
        this.router.navigate(['/admin']);
      } else {

        this.status = 'error';
        swal('Error', 'El proyecto no pudo ser creado :)', this.status);


      }
    }, error => {
      this.status = 'error';
    });
  }

  imageUpload(data) {
    let image_data = data.body;
    this.project.image = image_data.image;
  }
}
