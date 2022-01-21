import {Component} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {EmailValidators} from "./email.validators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public chosenFramework: string | undefined;
  frameworks = ['angular', 'react', 'vue'];
  formDeveloper = new FormGroup({
    firstNAme: new FormControl('', Validators.required),
    secondName: new FormControl('', Validators.required),
    dateOfBirth: new FormControl( '',  Validators.required),
    framework: new FormControl('',  Validators.required),
    frameworkVersion: new FormControl(''),
    email: new FormControl('',
      [ Validators.required, Validators.email, EmailValidators.emailVal]),
    hobbies: new FormArray([], Validators.required)
  });
  versionsFrameworks: any = {
    angular: ['1.1.1', '1.2.1', '1.3.3'],
    react: ['2.1.2', '3.2.4', '4.3.1'],
    vue: ['3.3.1', '5.2.1', '5.1.3'],
  }

  constructor() {
    this.formDeveloper.valueChanges.subscribe( () => {
      this.chosenFramework = this.formDeveloper.controls['framework'].value
    })
  }
  addHobby(){
    const addHobby = new FormControl('', Validators.required);
    (<FormArray>this.formDeveloper.get('hobbies')).push(addHobby);
  }
  submit(){
    console.log(this.formDeveloper.value)
  }


}
