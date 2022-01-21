import {FormControl} from "@angular/forms";

export class EmailValidators{

  static emailVal(control: FormControl): { [key: string]: boolean } | null{
    if(['test@test.test'].includes(control.value)) {
      return {emailVal: true}
    }
    return null
  }


}
