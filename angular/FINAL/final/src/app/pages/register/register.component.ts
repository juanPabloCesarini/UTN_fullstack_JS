import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //Ocultar la contraseña
  hide = true;


  //Propiedad FormGroup
  formGroup: FormGroup;
  //Propiedad de Carga
  loading = false;

  /**
   * Inyectamos FormBuilder y sanckbar
   *
   * @param formBuilder
   */
  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group(
      {
        nombre: ['', [Validators.required]],
        apellido: ['', [Validators.required]],
        telefono: ['', []],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
        passwordConfirm: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
      },
      {
        validators: this.MatchValidator("password","passwordConfirm")
      }
    )
  }
  /**
  * Mensajes de error del nombre
  *
  * @returns
  */
  getErrorMessageNombre() {

    return this.formGroup.get('nombre')?.hasError('required') ? 'Ingresa tu Nombre' : '';
  }
  /**
  * Mensajes de error del nombre
  *
  * @returns
  */
  getErrorMessageApellido() {

    return this.formGroup.get('apellido')?.hasError('required') ? 'Ingresa tu Apellido' : '';
  }
  /**
   * Mensajes de error del email
   *
   * @returns
   */
  getErrorMessageEmail() {

    if (this.formGroup.get('email')?.hasError('required')) {
      return 'Ingresa tu Email.';
    }

    return this.formGroup.get('email')?.hasError('email') ? 'Ingrese un Email Valido' : '';
  }
  /**
   * Mensajes de error de la
   * contraseña
   *
   * @returns
   */
  getErrorMessagePassword() {

    if (this.formGroup.get('password')?.hasError('minlength') || this.formGroup.get('password')?.hasError('maxlength')) {
      return 'Tu Contraseña debe tener entre 6 y 10 Caracteres.';
    }

    return this.formGroup.get('password')?.hasError('required') ? 'Ingresa tu Contraseña.' : '';
  }
  /**
   * Mensajes de error de la
   * contraseña para confirmar
   *
   * @returns
   */
  getErrorMessagePasswordConfirm() {
    if (this.formGroup.get('passwordConfirm')?.hasError('minlength') || this.formGroup.get('passwordConfirm')?.hasError('maxlength')) {
      return 'Tu Contraseña debe tener entre 6 y 10 Caracteres.';
    }
    if (this.formGroup.get('passwordConfirm')?.hasError('matchvalidator')) {
      return 'Las Contraseñas nos Coinciden.';
    }

    return this.formGroup.get('passwordConfirm')?.hasError('required') ? 'Confirma tu Contraseña.' : '';
  }
  register() {
    console.log(this.formGroup.value);

  }
  /**
   * Validar Contraseña que sean
   * iguales
   *
   * @param controlName
   * @param matchControlName
   * @returns
   */
  MatchValidator(controlName :string, matchControlName :string) {
    return (formGroup: FormGroup)=>{
      //Obtenemos los valores de los controles
      const control = formGroup.controls[controlName];
      const matchControl = formGroup.controls[matchControlName];
      //devolvemos si otro validador ya ha encontro un error en el matchControl
      if (matchControl.errors && !matchControl.errors["matchvalidator"]) {
        return;
      }
      //Setea un error en matchControl si se hay error en la validación
      if (control.value !== matchControl.value) {
        matchControl.setErrors({matchvalidator:true});
      }else{
        //Retornamos nulo
        matchControl.setErrors(null);
      }
    }
  }
  ngOnInit(): void {
  }

}
