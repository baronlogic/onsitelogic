import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  user: any;
  signInForm: FormGroup;
  hidePassword = true;
  bSignIn = false;

  constructor(
    private router: Router,
    public snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ){}

  ngOnInit() {
    this.InstantiateForm();
    //checkLeadLogged
    if(localStorage.getItem('leadLogged')){
      this.goToDashboard();
      return;
    }
  }

  InstantiateForm(){
    this.signInForm = this.formBuilder.group({
      Identifier: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

  openSnackBar(message: string){
    this.snackBar.open(message, 'Close', {
      duration: 30000,
    });
  }

  goToDashboard() {
    this.router.navigate(['pages']);
  }

  handleSignIn(){
    this.bSignIn = true;
    let formData = new FormData();
    formData.append('Identifier', this.signInForm.get('Identifier').value);
    formData.append('Password', this.signInForm.get('Password').value);
    console.log(this.signInForm.value);
  }

}
