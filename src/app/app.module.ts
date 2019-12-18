import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BluestackComponent } from './bluestack/bluestack.component';
import { ModalCompComponent } from './modal-comp/modal-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    BluestackComponent,
    ModalCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  entryComponents:[ModalCompComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
