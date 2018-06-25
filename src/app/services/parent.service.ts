import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subject} from 'rxjs';
import { Parent } from '../models/parent';

@Injectable()

export class ParentService {
  public checkEmail: Parent;
  public dataUpdated: Observable<Parent>;
  private dataSubject: Subject<Parent>;

  constructor(private http: HttpClient) {
    this.dataSubject = new Subject<Parent>();
    this.dataUpdated = this.dataSubject.asObservable();
   }

  checkParent(email){
    let parentEmail =  '/parent/parents/' + email;
    return this.http.get<Parent>(parentEmail).subscribe( (data) => {
      this.checkEmail = data;
      this.dataSubject.next(this.checkEmail)
    })
  }
}
