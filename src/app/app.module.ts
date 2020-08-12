import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyComponent } from './my/my.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule,
   MatCardModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatListModule, MatCheckboxModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatNativeDateModule, MatDatepickerModule, MatIconModule, MatCardModule,
    MatFormFieldModule, MatInputModule, MatRadioModule, MatListModule, MatCheckboxModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
