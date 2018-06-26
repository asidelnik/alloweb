import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';
import { Observable, Subject } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class TaskService implements OnInit {
    tasksArr: Task[] = new Array<Task>();
    public tasksSubject: Subject<Task[]> = new Subject<Task[]>();
    public tasksUpdated: Observable<Task[]>;

    constructor(private http: HttpClient) {
        this.tasksUpdated = this.tasksSubject.asObservable();
    }

    ngOnInit() { }

    getTasks(childId): void {
        this.http.get<any[]>('/child/' + childId).subscribe((data) => {
            this.tasksArr = data;            
            this.tasksSubject.next(this.tasksArr);
        })
    }

    addTask(task) {
        this.http.post<any[]>('/child', task).subscribe((data) => {
            this.tasksArr = data;
            this.tasksSubject.next(this.tasksArr);
        })
    }
}
