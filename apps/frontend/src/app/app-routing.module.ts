import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassProgressComponent } from './components/class-progress/class-progress.component';
import { StudentProgressComponent } from './components/student-progress/student-progress.component';

const routes: Routes = [
  {
    path: 'class-progress',
    component: ClassProgressComponent,
  },
  {
    path: 'student-progress',
    component: StudentProgressComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'class-progress',
  },
  {
    path: '**',
    redirectTo: 'class-progress',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
