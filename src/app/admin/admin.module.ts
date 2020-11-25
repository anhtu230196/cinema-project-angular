import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { MoviesComponent } from './movies/movies.component';
import { LayoutComponent } from './layout/layout.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'users' },
      { path: 'users', component: UsersComponent },
      { path: 'movies', component: MoviesComponent },
    ],
  },
];

@NgModule({
  declarations: [UsersComponent, MoviesComponent, LayoutComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AdminModule {}
