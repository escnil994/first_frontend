import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../models/Project';
import {API} from '../../services/api.service';
import {DomSanitizer} from '@angular/platform-browser';
import {ApinnerService} from '../../services/apinner.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public url: string;
  public sliderName: string;
  @Input() projects: Project[];


  constructor(
    private _sanitizer: DomSanitizer,
    private _spinnerservice: ApinnerService
  ) {
    this.url = API.url;
    this.sliderName = 'Mi portafolio';
  }

  ngOnInit(): void {

  }

}
