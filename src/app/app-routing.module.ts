import { CommentValueComponent } from './comment-value/comment-value.component';
import { CommentReadComponent } from './comment-read/comment-read.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{path:"login",component:LoginComponent},
{path:"comment", component:CommentReadComponent },
{path:"comment-value", component:CommentValueComponent },
{ path: '**',  redirectTo: '/login', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
