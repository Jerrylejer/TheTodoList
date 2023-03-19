import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './sharedComponents/header/header.component';
import { FooterComponent } from './sharedComponents/footer/footer.component';
import { TasksListComponent } from './pages/tasks-list/tasks-list.component';
import { TasksHistoryComponent } from './pages/tasks-history/tasks-history.component';
import { TasksNewComponent } from './pages/tasks-new/tasks-new.component';
import { LandingComponent } from './components/landing/landing.component';
import { AddingTasksComponent } from './components/adding-tasks/adding-tasks.component';
import { HistoricViewComponent } from './components/historic-view/historic-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TasksListComponent,
    TasksHistoryComponent,
    TasksNewComponent,
    LandingComponent,
    AddingTasksComponent,
    HistoricViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
