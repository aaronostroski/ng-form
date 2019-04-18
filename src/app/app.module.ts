// Plub in

// Angular import
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

// Routes object import
import { routes } from './app-routing.module';

// Component import
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TruckComponent } from './truck/truck.component';
import { InputComponent } from './shared/input/input.component';

// External Package import
import { NgxMaskModule } from 'ngx-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule,   MatInputModule,
} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    InputComponent,
    TruckComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    NgxMaskModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
