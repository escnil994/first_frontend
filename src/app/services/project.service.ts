import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API} from './api.service';

@Injectable()

export class ProjectService {
  public url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = API.url;
  }

  getProjects(last: any = null): Observable<any> {
    var dir = 'get-projects';
    if (last != null) {
      dir = 'get-projects/true';
    }
    return this.http.get(this.url + dir);
  }

  createProject(project): Observable<any> {
    let params = JSON.stringify(project);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.url + 'new-project', params, {headers: headers});
  }

  getComments(last: any = null): Observable<any> {
    var dir = 'comments';
    if (last != null) {
      dir = 'comments/true';
    }
    return this.http.get(this.url + dir);
  }

  newComment(comment): Observable<any> {
    let params = JSON.stringify(comment);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.url + 'new-comment', params, {headers: headers});
  }



  getProject(project_id): Observable<any> {
    return this.http.get(this.url + 'get-project/' + project_id);
  }

  search(search): Observable<any> {
    return this.http.get(this.url + 'search/' + search);
  }

  updateProjects(id, project): Observable<any> {
    let params = JSON.stringify(project);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.url + 'update-project/' + id, params, {headers: headers});
  }

  updateComment(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.url + 'allow-comment/' + id, {headers: headers});
  }

  deleteProject(id): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(this.url + 'delete-project/' + id, {headers: headers});
  }

  createPost(post): Observable<any> {
    let params = JSON.stringify(post);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.url + 'new-post', params, {headers: headers});
  }

  getPosts(last: any = null): Observable<any> {
    var dir = 'get-posts';
    if (last != null) {
      dir = 'get-posts/true';
    }
    return this.http.get(this.url + dir);
  }

  getPost(post_id): Observable<any> {
    return this.http.get(this.url + 'get-post/' + post_id);
  }

  deletePost(id): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(this.url + 'delete-post/' + id, {headers: headers});
  }

  deleteComment(id): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(this.url + 'delete-comment/' + id, {headers: headers});
  }

  getUserInfo(): Observable<any> {
    var dir = 'get-info';
    return this.http.get(this.url + dir);
  }
}
