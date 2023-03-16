import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './sharedComponents/header/header.component';
import { FooterComponent } from './sharedComponents/footer/footer.component';
import { TasksListComponent } from './pages/tasks-list/tasks-list.component';
import { TasksHistoryComponent } from './pages/tasks-history/tasks-history.component';
import { TasksNewComponent } from './pages/tasks-new/tasks-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TasksListComponent,
    TasksHistoryComponent,
    TasksNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
