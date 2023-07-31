import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Pages/home/home.component';
import { SingleProductComponent } from './Components/single-product/single-product.component';
import { ProductService } from './product.service';
import { TextComponentComponent } from './text-component/text-component.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, SingleProductComponent, TextComponentComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
