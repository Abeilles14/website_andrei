import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { OtherComponent } from './components/other/other.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    AboutComponent,
    ResumeComponent,
    DocumentsComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    Ng2PageScrollModule,
    RouterModule.forRoot(
			[
        { path: 'about', component: AboutComponent },
        { path: 'documents', component: DocumentsComponent },
        { path: 'other', component: OtherComponent },
        { path: 'projects', component: ProjectsComponent },
        { path: 'resume', component: ResumeComponent }
      ],
			{
				scrollPositionRestoration: "enabled",
				anchorScrolling: "enabled",
				enableTracing: false
			}
		)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
