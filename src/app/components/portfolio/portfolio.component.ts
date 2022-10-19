import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {Project} from '../../models/Project';
import {API} from '../../services/api.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers: [ProjectService]
})
export class PortfolioComponent implements OnInit {


  public url: string;
  public projects: Project[];

  public sliderName: string;

  constructor(
    private projectService: ProjectService
  ) {
    this.url = API.url;
    this.sliderName = 'Mi portafolio';
  }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(res => {
      if (res.projects) {
        this.projects = res.projects;
      }
    }, error => {
      console.log(error);
    });
  }

}
