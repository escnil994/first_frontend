import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Project} from '../../models/Project';
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'app-project-search',
  templateUrl: './project-search.component.html',
  styleUrls: ['./project-search.component.css'],
  providers: [ProjectService]
})
export class ProjectSearchComponent implements OnInit {
  public sliderName: string;
  public projects: Project[];
  public search: string;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.search = params['search'];
      this._projectService.search(this.search).subscribe(response => {
        if (response.projects) {
          this.projects = response.projects;

        }
      }, error => {
        this.projects = null;
        console.log(error);
      });
    });
  }

}
