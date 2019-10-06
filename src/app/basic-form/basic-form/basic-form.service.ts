import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class BasicFormService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = "/save";
  }

  save(basicForm: FormGroup): Observable<boolean> {
    // POST WITH THIS LINE : return this.http.post(this.url, basicForm.value);

    // of(true) mocks the succes post
    return of(true);
  }
}
