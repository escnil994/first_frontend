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



  //Users
  getUserInfo(): Observable<any> {
    var dir = 'auth/get-info';
    return this.http.get(this.url + dir);
  }




  //Projects

  getProjects(last: any = null): Observable<any> {
    var dir = 'project/get-projects';
    if (last != null) {
      dir = 'project/get-projects/true';
    }
    return this.http.get(this.url + dir);
  }

  getProject(project_id): Observable<any> {
    return this.http.get(this.url + 'project/get-project/' + project_id);
  }

  createProject(project): Observable<any> {
    let params = JSON.stringify(project);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.url + 'project/new-project', params, {headers: headers});
  }

  
  updateProjects(id, project): Observable<any> {
    let params = JSON.stringify(project);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.url + 'project/update-project/' + id, params, {headers: headers});
  }

  deleteProject(id): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(this.url + 'project/delete-project/' + id, {headers: headers});
  }



//POSTS


  createPost(post): Observable<any> {
    let params = JSON.stringify(post);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.url + 'blog/new-post', params, {headers: headers});
  }

  getPosts(last: any = null): Observable<any> {
    var dir = 'blog/get-posts';
    if (last != null) {
      dir = 'blog/get-posts';
    }
    return this.http.get(this.url + dir);
  }

  getPost(post_id): Observable<any> {
    return this.http.get(this.url + 'blog/get-post/' + post_id);
  }

  deletePost(id): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(this.url + 'blog/delete-post/' + id, {headers: headers});
  }





  //Coments
  
  getComments(last: any = null): Observable<any> {
    var dir = 'comment/get-comments';
    if (last != null) {
      dir = 'comment/get-comments/true';
    }
    
    return this.http.get(this.url + dir);
  }

  newComment(comment): Observable<any> {
    let params = JSON.stringify(comment);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.url + 'comment/new-comment', params, {headers: headers});
  }

  
  updateComment(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.url + 'comment/allow-comment/' + id, {headers: headers});
  }

  deleteComment(id): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(this.url + 'comment/delete-comment/' + id, {headers: headers});
  }





  //Utils

  
  search(search): Observable<any> {
    return this.http.get(this.url + 'search/' + search);
  }


}
