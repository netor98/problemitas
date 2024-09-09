import { Routes } from '@angular/router';
import {DadoComponent} from "./dado/dado.component";
import {DadosBotonComponent} from "./dados-boton/dados-boton.component";
import {CronometroComponent} from "./cronometro/cronometro.component";
import {SelectorComponent} from "./selector/selector.component";
import {
  SelectorMinMaxComponent
} from "./selector-min-max/selector-min-max.component";
import {ArticulosComponent} from "./articulos/articulos.component";
import {ActividadesComponent} from "./actividades/actividades.component";
import {ContactFormComponent} from "./contact-form/contact-form.component";
import {ConversionComponent} from "./conversion/conversion.component";
import {StudentDataComponent} from "./student-data/student-data.component";
import { FormValidationComponent } from './form-validation/form-validation.component';
import {MultipleFiveComponent} from "./multiple-five/multiple-five.component";
import {
  FormValidation2Component
} from "./form-validation2/form-validation2.component";

export const routes: Routes = [
  { path: 'dado', component: DadoComponent},
  { path: 'dado-boton', component: DadosBotonComponent},
  { path: 'cronometro', component: CronometroComponent},
  { path: 'selector', component: SelectorComponent},
  { path: 'selector-min-max', component: SelectorMinMaxComponent},
  { path: 'articulos', component: ArticulosComponent},
  { path: 'actividades', component: ActividadesComponent},
  { path: 'form-contact', component: ContactFormComponent},
  { path: 'conversion', component: ConversionComponent},
  { path: 'alumno', component: StudentDataComponent},
  { path: 'validacion', component: FormValidationComponent},
  { path: 'multiplo', component: MultipleFiveComponent},
  { path: 'validacion-reactiva', component: FormValidation2Component},
];
