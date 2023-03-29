import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AngularFileUploaderModule} from 'angular-file-uploader';
import {YouTubePlayerModule} from '@angular/youtube-player';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {ErrorComponent} from './components/error/error.component';
import {BannerComponent} from './components/banner/banner.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {NewProjectComponent} from './components/new-project/new-project.component';
import {BlogComponent} from './components/blog/blog.component';
import {AboutComponent} from './components/about/about.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {Sidebar2Component} from './components/sidebar2/sidebar2.component';
import {RepliesComponent} from './components/replies/replies.component';
import {CommentsComponent} from './components/comments/comments.component';
import {GetCommentsComponent} from './components/get-comments/get-comments.component';
import {SecurePipePipe} from './pipes/secure-pipe.pipe';
import {MoreProjectComponent} from './components/more-project/more-project.component';
import {FiveCommentsComponent} from './components/five-comments/five-comments.component';
import {ProjectSearchComponent} from './components/project-search/project-search.component';
import {EditProjectComponent} from './components/edit-project/edit-project.component';
import {NewPostComponent} from './components/new-post/new-post.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {ResumeComponent} from './components/resume/resume.component';
import {UserInfoComponent} from './components/user-info/user-info.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import { LogComponent } from './components/log/log.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    BannerComponent,
    ProjectsComponent,
    PortfolioComponent,
    NewProjectComponent,
    BlogComponent,
    AboutComponent,
    ContactsComponent,
    Sidebar2Component,
    RepliesComponent,
    CommentsComponent,
    GetCommentsComponent,
    SecurePipePipe,
    MoreProjectComponent,
    FiveCommentsComponent,
    ProjectSearchComponent,
    EditProjectComponent,
    NewPostComponent,
    PostsComponent,
    PostComponent,
    ResumeComponent,
    UserInfoComponent,
    LogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFileUploaderModule,
    YouTubePlayerModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
