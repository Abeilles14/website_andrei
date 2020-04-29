import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { OtherComponent } from './components/other/other.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [
  { path: '', redirectTo:'about', pathMatch:'full'},
  { path: 'about', component: AboutComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'other', component: OtherComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
