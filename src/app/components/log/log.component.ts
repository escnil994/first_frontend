import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { timestamp } from 'rxjs/operators';
import { PasswordValidator } from 'src/app/interfaces/pattern';
import { Project } from 'src/app/models/Project';
import { UserI } from 'src/app/models/user';
import { API } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

 

  
  public user: UserI;

  public searchProject: string;
  public projects: Project[];
  public url: string;
  public myform: FormGroup;
  public registerForm: FormGroup;

  public loging: boolean = false;


  constructor(
    public authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public fb: FormBuilder
  ) {
    this.url = API.url; 
    this.myform = this.fb.group({
      email:[],
      password:['', [Validators.minLength(8)]]
    });
    this.registerForm = this.fb.group({
      name:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8), PasswordValidator.strong]]
    });
    
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(({ admin }) => {
      if (admin === 'escnil994') {
        if (localStorage.getItem('ACCESS_TOKEN')) {
          this.loging = true;
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 3500);
        }
      }
      else{
        
        this.router.navigate(['/']);

      }
      
    });

  

  }



  onLogin(form): void {
    this.authService.login(form.value).subscribe(res => {
      this.router.navigateByUrl('/admin');
      swal('bienvenido', 'Iniciaste Sesión como administrador', 'success');
    }, error => {
      swal('Error', 'Datos Incorrectos', 'error');
    });
    this.myform.reset();
  }





}
