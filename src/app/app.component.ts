import { Component } from '@angular/core';
import { FormArray, FormArrayName, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form';

 testform=new FormGroup({

  mobileName: new FormArray([
     new FormControl(null,Validators.required),
     new FormControl(null,Validators.required),
   ])

 })
 Add(){
 let mobileName = this.testform.get('mobileName') as FormArray
 mobileName.push(new FormControl(null,Validators.required))
 }
 remove(i:number){
  let mobileName=this.testform.get('mobileName') as FormArray
  mobileName.removeAt(i)
  console.log(mobileName)


 }
}
