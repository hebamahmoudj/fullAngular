import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators} from'@angular/forms';
import { AuthService } from '../auth.service';
import{Router} from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
regesterForm:FormGroup=new FormGroup({
  'first_name':new FormControl(null,[Validators.minLength(3),Validators.maxLength(10)]),
  'last_name':new FormControl(null,[Validators.minLength(3),Validators.maxLength(10)]),
  'age':new FormControl(null,[Validators.min(10),Validators.max(30)]),
  'email':new FormControl(null,[Validators.required,Validators.email]),
  'password':new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(10)])

});
  constructor(public _AuthService:AuthService,public _Router:Router) { }
err:string='';
  ngOnInit(): void {
  }
  onSubmit(formData:any){
   
    if(formData.valid == true){
      this._AuthService.signUp(formData.value).subscribe((data)=>{
         if(data.message== "success"){
         this._Router.navigate(['/signin'])
       console.log(data)
    }
    else{
      this.err="mail aready register";
    
    }
  });
   }}}
