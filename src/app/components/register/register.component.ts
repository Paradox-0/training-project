import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors, FormArray } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  emailMobileRequired = false;
  roles = ['Admin', 'User'];
  constructor() { }

  ngOnInit(): void {
    // push the user role value into the rules array from api service

    this.registerForm = new FormGroup({

      'userName': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(50), Validators.pattern('[a-zA-Z ]+')]),
      'phone': new FormControl(null, [Validators.minLength(10), Validators.maxLength(10)]),
      'email': new FormControl(null, [Validators.email]),
      'gender': new FormControl('male'),
      'dob': new FormControl(null, [Validators.required]),
      'role': new FormControl(null, [Validators.required]),
      'hobbies': new FormArray([new FormControl('', Validators.maxLength(5))]),
      'profilephoto': new FormControl(null)
    })
  }

  onRegisterSubmit() {
    console.log(this.registerForm.value)
  }

  private ageValidator() {

    //remaining for age validation 
  }

  onAddHobby() {
    if (this.registerForm.value.hobbies.length >= 5) {
      return;
    }
    const control = new FormControl(null);
    (<FormArray>this.registerForm.get('hobbies')).push(control); console.log(this.registerForm.value.hobbies);
  }

  get controls() {
    return (<FormArray>this.registerForm.get('hobbies')).controls;
  }
}
