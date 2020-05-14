import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface SubscribeData {
  first_name: string;
  last_name: string;
  password: string;
  email: string;
}

@Component({
  selector: 'subscribe-dialog',
  templateUrl: './subscribe-dialog.component.html',
  styleUrls: ['./subscribe-dialog.component.scss']
})
export class SubscribeDialogComponent implements OnInit{
  subscribeForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<SubscribeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SubscribeData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(){
    if(this.subscribeForm.valid){
      this.dialogRef.close(this.subscribeForm.value);
    }
  }

  ngOnInit(){
    this.subscribeForm = new FormGroup({
      email: new FormControl('test@test.com', [Validators.email, Validators.required]),
      password: new FormControl(123456, [Validators.required, Validators.minLength(6)]),
      first_name: new FormControl('Vasiliy', [Validators.required, Validators.minLength(3)]),
      last_name: new FormControl('Pupkin', [Validators.required, Validators.minLength(3)])
    })
  }
    

}
