import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formData ={
    email: '',
    password: ''
  };
  form: FormGroup;
  constructor(private router: Router ,private http: HttpClient) { }

  ngOnInit() {
    this.form = new FormGroup({
      emailMobile: new FormControl('', {
        updateOn: 'submit',
        validators: [
          Validators.required
        ]
      }),
      password: new FormControl('', {
        updateOn: 'submit',
        validators: [
          Validators.required
        ]
      })
    });
  }

  logform(value){
    console.log(this.formData);
    const data = {
      email:this.formData.email,
      password:this.formData.password
    };
    this.http.post('https://reqres.in/api/login',data).subscribe((response:any)=>{
    localStorage.setItem('token',response.token);
    this.router.navigateByUrl('home');
    },(err)=>{
    console.log(err);
    });
    console.log('runinig');
  }
}
