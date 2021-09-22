import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudentProgressComponent } from './components/student-progress/student-progress.component';
import { ClassProgressComponent } from './components/class-progress/class-progress.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressChartComponent } from './components/student-progress/progress-chart/progress-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentProgressComponent,
    ClassProgressComponent,
    ProgressChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
