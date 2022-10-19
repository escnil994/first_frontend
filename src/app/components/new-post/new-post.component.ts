import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {API} from '../../services/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import swal from 'sweetalert';
import {Post} from '../../models/Posts';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
  providers: [ProjectService]
})
export class NewPostComponent implements OnInit {

  public post: Post;
  public sliderName: string;
  public status: string;
  public isEdit: boolean;
  public url2: string;


  afuConfig = {
    multiple: false,
    formatsAllowed: '.jpg, .png, .jpeg, .gif',
    maxSize: '50',
    uploadAPI: {
      url: API.url + 'upload-image-post/',
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
      attachPinBtn: 'Elige la imagen del post...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) {
    this.sliderName = 'Completa la siguiente informacion de tu post';
    this.post = new Post('', '', '', '', '', '', null, null);
    this.isEdit = false;
    this.url2 = API.url;
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.projectService.createPost(this.post).subscribe(res => {
      console.log(res);
      if (res.status === 'success') {
        this.status = 'success';
        this.post = res.post;

        swal('¡¡¡En hora Buena!!!', 'El proyecto se ha creado correctamente', 'success');
        this.router.navigate(['/admin']);
      } else {

        this.status = 'error';
        swal('Error', 'El proyecto no pudo ser creado :)', this.status);


      }
    }, error => {
      console.log(error);
      this.status = 'error';
    });
  }

  imageUpload(data) {
    let image_data = data.body;
    this.post.image = image_data.image;
  }

}
