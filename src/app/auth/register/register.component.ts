import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css' ]
})
export class RegisterComponent {

  public formSubmitted = false;

  public registerForm = this.fb.group({
    nombre: ['', [ Validators.required, Validators.minLength(3) ]],
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(5) ]],
    password2: ['', [ Validators.required, Validators.minLength(5) ]],
    terminos: [ false, [ Validators.required ]],
  }, {
    validators: this.passwordsIguales('password', 'password2')
  });

  constructor(private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router) { }

  createUsuario() {
    this.formSubmitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    
    // Registrar el posteo
    this.usuarioService.createUsuario(this.registerForm.value)
        .subscribe( resp => {
          //Navegar al dashboard
          this.router.navigateByUrl('/');

        }, (err) => {
          //Si sucede un error
          Swal.fire('Error', err.error.msg, 'error');
        });
  }

  campoNoValido( campo: string ): boolean {
    if (this.registerForm.get(campo)?.invalid && this.formSubmitted)
    {
      return true;
    } else {
      return false;
    }
  }

  aceptaTerminos(): boolean {
    return !this.registerForm.get('terminos')?.value && this.formSubmitted;
  }

  passwordNoValidos() {
    const password = this.registerForm.get('password')?.value;
    const password2 = this.registerForm.get('password2')?.value;

    if (password !== password2 && this.formSubmitted) {
      return true;
    } else {
      return false;
    }

  }

  passwordsIguales(password1: string, password2: string ) {
    
    return ( formGroup: FormGroup ) => {

      const pass1Control = formGroup.get(password1);
      const pass2Control = formGroup.get(password2);

      if ( pass1Control?.value === pass2Control?.value ) {
        pass2Control?.setErrors(null);
      } else {
        pass2Control?.setErrors({ noEsIgual: true });
      }

    }

  }
}
