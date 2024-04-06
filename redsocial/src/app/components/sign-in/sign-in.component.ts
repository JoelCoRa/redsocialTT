import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterModule } from '@angular/router';
import { BtnRegresarComponent } from '../btn-regresar/btn-regresar.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TituloComponent } from '../titulo/titulo.component';
import { EnviarComponent } from '../enviar/enviar.component';
import { ToastrService } from 'ngx-toastr';
import {  MatSnackBar,  MatSnackBarHorizontalPosition,  MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
import { MatError } from '@angular/material/form-field';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports:[FooterComponent, RouterModule, BtnRegresarComponent, FormsModule, TituloComponent, EnviarComponent, ReactiveFormsModule, MatError,CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  signInForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private sb: MatSnackBar){
    this.signInForm = new FormGroup({
      nombre: new FormControl('',[Validators.required, Validators.minLength(2),Validators.maxLength(50)]),
      apellido: new FormControl('',[Validators.required, Validators.minLength(2),Validators.maxLength(50)]),
      fechaNac: new FormControl('',Validators.required),
      sexo: new FormControl('',Validators.required),
      correo: new FormControl('',[Validators.required, Validators.email]),
      username: new FormControl('',[Validators.required, Validators.minLength(8)]),
      password: new FormControl('',[Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('',[Validators.required, Validators.minLength(8)]),
    })
  }




  // registro = new FormGroup({
  //   nombre: new FormControl('',[Validators.required, Validators.minLength(2),Validators.maxLength(50)]),
  //   apellido: new FormControl('',[Validators.required, Validators.minLength(2),Validators.maxLength(50)]),
  //   fechaNac: new FormControl('',Validators.required),
  //   sexo: new FormControl('',Validators.required),
  //   correo: new FormControl('',[Validators.required, Validators.email]),
  //   username: new FormControl('',[Validators.required, Validators.minLength(8)]),
  //   password: new FormControl('',[Validators.required, Validators.minLength(8)]),
  //   confrimPassword: new FormControl('',[Validators.required, Validators.minLength(8)]),
  // });

  public sexo: string = '';
  passwordsMatch: boolean = false;
  
  action: string = 'Cerrar'; 
  onSubmit() {
    if (this.registro.get('password')?.value !== this.registro.get('confirmPassword')?.value) {
      this.sb.open('Las contraseñas no coinciden', this.action, {
        duration: 5000,        
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass: ['notifError'],  
      });
      return; // Detener el envío del formulario si las contraseñas no coinciden
    }

    // Realiza la inserción en la base de datos utilizando tu servicio
    // this.user.signIn(this.registro.).subscribe(
    //   (respuesta) => {
    //     // La inserción fue exitosa, mostrar un mensaje de éxito
    //     this.sb.open('Datos agregados correctamente a la base de datos', 'Cerrar', { duration: 3000 });
    //     console.log('Datos agregados correctamente a la base de datos:', respuesta);
    //   },
    //   (error) => {
    //     // Ocurrió un error al insertar los datos, mostrar un mensaje de error
    //     this.sb.open('Error al agregar datos a la base de datos', 'Cerrar', { duration: 3000 });
    //     console.error('Error al agregar datos a la base de datos:', error);
    //   }
    // );








    if (this.registro.valid) {
      // Realiza la acción correspondiente al enviar el formulario
      console.log('Formulario válido');
    } else {
      // Si el formulario no es válido, muestra el Snackbar
      this.sb.open('Todos los campos son obligatorios', this.action, {
        duration: 5000,        
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass: ['notifError'],  
      });
    }
    
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (password?.value !== confirmPassword?.value) {
      confirmPassword?.setErrors({ mismatch: true });
    } else {
      confirmPassword?.setErrors(null);
    }
  }

  sendMail(){
    console.log("Correo enviado");
  }

  tologin(){
    this.router.navigate(['/login']);
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';


  

  // addUser() {    
  //   // Errores
  //   // Error en los campos
  //   this.sb.open('Campos incorrectos, revisalo e intentalo de nuevo', this.action, {
  //     duration: 5000,        
  //     horizontalPosition: this.horizontalPosition,
  //     verticalPosition: this.verticalPosition,
  //     panelClass: ['notifError'],  
  //   });
  //   // Contraseñas no coinciden
  //   this.sb.open('Las contraseñas no coinciden', this.action, {
  //     duration: 5000,        
  //     horizontalPosition: this.horizontalPosition,
  //     verticalPosition: this.verticalPosition,
  //     panelClass: ['notifError'],  
  //   });
  //   // El nombre de usuario o correo ya existen
  //   this.sb.open('El usuario o correo ya estan registrados', this.action, {
  //     duration: 5000,        
  //     horizontalPosition: this.horizontalPosition,
  //     verticalPosition: this.verticalPosition,
  //     panelClass: ['notifError'],  
  //   });
  //   // Error interno
  //   this.sb.open('Ha ocurrido un error interno, intentalo de nuevo más tarde”', this.action, {
  //     duration: 5000,        
  //     horizontalPosition: this.horizontalPosition,
  //     verticalPosition: this.verticalPosition,
  //     panelClass: ['notifExito'],  
  //   });


  //   // Usuario registaro exitosamente
  //   this.sb.open('Usuario registrado con éxito”', this.action, {
  //     duration: 5000,        
  //     horizontalPosition: this.horizontalPosition,
  //     verticalPosition: this.verticalPosition,
  //     panelClass: ['notifExito'],          
  //   });

  //   let valor = 3;
  //   // Validar que los datos sean correctos
  //   if(valor == 3){
  //     this.sb.open('Campos incorrectos, revisalo e intentalo de nuevo', this.action, {
  //       duration: 5000,        
  //       horizontalPosition: this.horizontalPosition,
  //       verticalPosition: this.verticalPosition,
  //       panelClass: ['notifError'],  
  //     });
      
  //   }else if(valor == 4){
  //     this.sb.open('Usuario registrado con éxito”', this.action, {
  //       duration: 5000,        
  //       horizontalPosition: this.horizontalPosition,
  //       verticalPosition: this.verticalPosition,
  //       panelClass: ['notifExito'],          
  //     });
  //   }else if(valor == 5){
  //     this.sb.open('Ha ocurrido un error interno, intentalo de nuevo más tarde”', this.action, {
  //       duration: 5000,        
  //       horizontalPosition: this.horizontalPosition,
  //       verticalPosition: this.verticalPosition,
  //       panelClass: ['notifExito'],  
  //     });
  //   }
  // }
}
