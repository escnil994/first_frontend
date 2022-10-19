import {Component, Input, OnInit} from '@angular/core';
import {API} from '../../services/api.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Post} from '../../models/Posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public url: string;
  public sliderName: string;
  @Input() posts: Post[];


  constructor(
    private _sanitizer: DomSanitizer
  ) {
    this.url = API.url;
    this.sliderName = 'Nuevos posts';
  }

  ngOnInit(): void {

  }

}
