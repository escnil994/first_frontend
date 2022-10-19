import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import swal from 'sweetalert';
import {ProjectService} from '../../services/project.service';
import {Project} from '../../models/Project';
import {API} from '../../services/api.service';
import {UserI} from '../../models/user';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, NgForm, PatternValidator, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { PasswordValidator } from '../../interfaces/pattern';


@Component({
  selector: 'app-sidebar2',
  templateUrl: './sidebar2.component.html',
  styleUrls: ['./sidebar2.component.css'],
  providers: [ProjectService]
})
export class Sidebar2Component implements OnInit {

  public user: UserI;

  public searchProject: string;
  public projects: Project[];
  public url: string;
  public myform: FormGroup
  public registerForm: FormGroup


  constructor(
    private projectService: ProjectService,
    public authService: AuthService,
    private router: Router,
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
    this.projectService.getProjects(true).subscribe(res => {
      if (res.projects) {
        this.projects = res.projects;
      }
    }, error => {
      console.log(error);
    });

  }


  goSearch() {
    this.router.navigate(['buscar/' + this.searchProject]);
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


  onRegister(form): void {
    this.authService.register(form.value).subscribe(res => {
      this.router.navigateByUrl('/blog');
      swal('Exitoso', 'usuario creado exitosamente', 'success');
    }, HttpErrorResponse => {
      if(HttpErrorResponse.error === 'Email already exists'){
        swal('Error', 'Ya existe un usuario con este correo', 'error');
      }
      else{
        swal('Error', 'Error al crear el usuario', 'error');
      }
    });
  }
}




