import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm=new FormGroup({
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(10)])
  });
err:string=''
  constructor(public _AuthService:AuthService,public _Router:Router) { }

  ngOnInit(): void {
  }
submitForm(formData:any){
  this._AuthService.signin(formData.value).subscribe((data)=>{if(data.message == "success"){
    this._AuthService.saveUserData(data.user,data.token);
    console.log(data.user)
    this._Router.navigate(["./home"]);
    // console.log(data)
  }else{
    this.err="email or password not vaid"
  }

},(err)=>{console.log(err)})
 
}



}
