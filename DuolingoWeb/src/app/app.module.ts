import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home/home.component';
import { NavbarhComponent } from './Home/navbarh/navbarh.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { NavbaraComponent } from './Admin/navbara/navbara.component';
import { AdminlrComponent } from './Admin/adminlr/adminlr.component';
import { UserComponent } from './Users/user/user.component';
import { NavbaruComponent } from './Users/navbaru/navbaru.component';
import { UserlrComponent } from './Users/userlr/userlr.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarhComponent,
    AdminComponent,
    NavbaraComponent,
    AdminlrComponent,
    UserComponent,
    NavbaruComponent,
    UserlrComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
