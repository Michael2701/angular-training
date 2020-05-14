import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface LoginData {
  password: string;
  email: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit{
  loginForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LoginData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.dialogRef.close(this.loginForm.value);
    }
  }

  ngOnInit(){
    this.loginForm = new FormGroup({
      email: new FormControl('test@test.com', [Validators.email, Validators.required]),
      password: new FormControl(123456, [Validators.required, Validators.minLength(6)])
    })
  }
    

}
