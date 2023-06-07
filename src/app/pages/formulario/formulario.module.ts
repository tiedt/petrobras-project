import { NgModule } from '@angular/core';
import { FormularioRoutingModule } from './formulario-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormularioComponent } from './formulario.component';


@NgModule({
  declarations: [FormularioComponent],
  imports: [
    SharedModule,
    FormularioRoutingModule
  ]
})
export class FormularioModule { }
