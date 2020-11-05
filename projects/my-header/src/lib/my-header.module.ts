import { NgModule } from '@angular/core';
import { MyHeaderComponent } from './my-header.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [MyHeaderComponent],
  imports: [
    HttpClientModule
  ],
  exports: [MyHeaderComponent]
})
export class MyHeaderModule { }
