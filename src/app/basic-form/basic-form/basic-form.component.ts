import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BasicFormService} from "./basic-form.service";

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

  private static MIN_LENGTH = 10;
  private static MIN_AGE = 5;

  basicFormGroup: FormGroup = this.formBuilder.group(
    {
      name: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.minLength(BasicFormComponent.MIN_LENGTH)]],
      age: ['', [Validators.required, Validators.min(BasicFormComponent.MIN_AGE)]],
    }
  );

  constructor(private formBuilder: FormBuilder, private basicFormService: BasicFormService) {
  }

  ngOnInit() {
  }

  validate(isValid: boolean, form: FormGroup) {
    if (isValid) {
      this.basicFormService.save(form).subscribe((resp) => {
        alert('Formulaire validé avec succès avec valeur de retour ' + resp);
      });
    }
  }
}
