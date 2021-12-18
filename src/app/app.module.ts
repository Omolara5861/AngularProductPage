import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProductListComponent } from 'src/products/product-list.component';
import { AppComponent } from './app.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from 'src/products/product-detai.component';
import { ProductDetailGuard } from 'src/products/product-detail.guard';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', 
      canActivate: [ProductDetailGuard],
      component: ProductDetailComponent
    },
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: '/welcome', pathMatch: 'full' },
      {path: '**', redirectTo: '/welcome', pathMatch: 'full'},
    ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
