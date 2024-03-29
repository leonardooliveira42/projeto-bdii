import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRegisterComponent } from './home-register/home-register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { RProfessorComponent } from './rprofessor/rprofessor.component';
import { RUnidadeComponent } from './runidade/runidade.component';
import { RalunoComponent } from './raluno/raluno.component';
import { RgrupoComponent } from './rgrupo/rgrupo.component';
import { RapresentacaoComponent } from './rapresentacao/rapresentacao.component';
import { RsalaComponent } from './rsala/rsala.component';
import { SelectUnityComponent } from 'src/app/components/select-unity/select-unity.component';

import { FormsModule, FormGroup }   from '@angular/forms';

@NgModule({
  declarations: [
    HomeRegisterComponent,
    RProfessorComponent,
    RUnidadeComponent,
    RalunoComponent,
    RgrupoComponent,
    RapresentacaoComponent,
    RsalaComponent, 
    SelectUnityComponent  ],
  imports: [
    CommonModule, 
    FormsModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
