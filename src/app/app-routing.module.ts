import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { RegisComponent } from './regis/regis.component';

const routes: Routes = [
  {path:'',component:RegisComponent},
  {path:'reg',component:RegisComponent},
  {path:'message',component:MessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
