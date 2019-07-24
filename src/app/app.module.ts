import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowItemComponent } from './Item/show-item/show-item.component';
import { ShowItemsComponent } from './Item/show-items/show-items.component';
import { AddItemComponent } from './Item/add-item/add-item.component';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowItemComponent,
    ShowItemsComponent,
    AddItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
