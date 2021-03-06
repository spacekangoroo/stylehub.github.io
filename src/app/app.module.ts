import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ButtonComponent} from './button/button.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ProductsComponent} from './products/products.component';
import {ImprintComponent} from './imprint/imprint.component';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import {ContactComponent} from './contact/contact.component';
import {SustainabilityComponent} from './sustainability/sustainability.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    ProductsComponent,
    ImprintComponent,
    PrivacyPolicyComponent,
    ContactComponent,
    SustainabilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
