import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {ErrorComponent} from './components/error/error.component';
import {AuthGuard} from './guards/auth.guard';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {NewProjectComponent} from './components/new-project/new-project.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {AboutComponent} from './components/about/about.component';
import {BlogComponent} from './components/blog/blog.component';
import {MoreProjectComponent} from './components/more-project/more-project.component';
import {ProjectSearchComponent} from './components/project-search/project-search.component';
import {GetCommentsComponent} from './components/get-comments/get-comments.component';
import {EditProjectComponent} from './components/edit-project/edit-project.component';
import {NewPostComponent} from './components/new-post/new-post.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {ResumeComponent} from './components/resume/resume.component';
import { LogComponent } from './components/log/log.component';
import { CommentsComponent } from './components/comments/comments.component';


const routes: Routes = [
  {path: '', component: BlogComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'more/project/:id', component: MoreProjectComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'buscar/:search', component: ProjectSearchComponent},
  {path: 'admin', component: PortfolioComponent, canActivate: [AuthGuard]},
  {path: 'new-project', component: NewProjectComponent, canActivate: [AuthGuard]},
  {path: 'all-comments', component: GetCommentsComponent},
  {path: 'edit-project/:id', component: EditProjectComponent},
  {path: 'approvo-comment-by-escnil994-admin/:id', component: CommentsComponent},
  {path: 'new-post', component: NewPostComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'post/:id', component: PostComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'login-admin-pro/:admin', component: LogComponent},
  {path: '**', component: ErrorComponent}
];


export const appRoutingModule: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
