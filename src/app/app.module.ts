import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClient } from 'selenium-webdriver/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';



import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { ParentMainComponent } from './components/parent-main/parent-main.component';
import { ChildTasksComponent } from './components/child-tasks/child-tasks.component';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskComponent } from './components/task/task.component';
import { LoginComponent } from './components/login/login.component';
<<<<<<< HEAD
import { ChildCardComponent } from './components/child-card/child-card.component';
=======
import { AddChildComponent } from './add-child/add-child.component';
import { WishListComponent } from './components/wish-list/wish-list.component';


>>>>>>> e4d427f41fd9f407f30926ebe8c48737838d9153

import { ParentService } from './services/parent.service';
import { ChildService } from './services/child.service';
import { TaskService } from './services/task.service';
<<<<<<< HEAD
import { GoalService } from './services/goal.service';
=======
import { WishListService } from './services/wish-list.service';
>>>>>>> e4d427f41fd9f407f30926ebe8c48737838d9153



import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';




@NgModule({
    declarations: [
        AppComponent,
        ParentMainComponent,
        ChildTasksComponent,
        HeaderComponent,
        TasksComponent,
        TaskComponent,
        LoginComponent,
<<<<<<< HEAD
        ChildCardComponent
=======
        AddChildComponent,
        WishListComponent
>>>>>>> e4d427f41fd9f407f30926ebe8c48737838d9153
    ],
    imports: [
        BrowserModule,
        MatToolbarModule,
        MatGridListModule,
        MatTabsModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        MatSlideToggleModule,
        MatCheckboxModule,
        FlexLayoutModule,
        MatProgressBarModule
    ],
    providers: [
        ParentService,
        ChildService,
        TaskService,
        WishListService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
