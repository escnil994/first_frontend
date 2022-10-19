import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {API} from '../../services/api.service';
import {Post} from '../../models/Posts';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ProjectService]
})
export class BlogComponent implements OnInit {

  public url: string;
  public posts: Post[];

  public sliderName: string;

  constructor(
    private projectService: ProjectService
  ) {
    this.url = API.url;
    this.sliderName = 'Bienvenido al blog de Nilson Escobar';
  }

  ngOnInit(): void {
    this.projectService.getPosts().subscribe(res => {
      if (res.posts) {
        this.posts = res.posts;
      }
    }, error => {
      console.log(error);
    });
  }

}
