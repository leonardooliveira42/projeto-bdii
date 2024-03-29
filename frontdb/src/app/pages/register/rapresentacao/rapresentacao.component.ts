import { Component, OnInit } from '@angular/core';
import { ApresentacaoService } from 'src/app/services/apresentacao.service';
import { GrupoService } from 'src/app/services/grupo.service';

@Component({
  selector: 'app-rapresentacao',
  templateUrl: './rapresentacao.component.html',
  styleUrls: ['./rapresentacao.component.sass']
})
export class RapresentacaoComponent implements OnInit {

  alreadyExist: boolean = false; 
  unitySuccess: boolean = false; 
  unknowError: boolean = false; 

  grupo = ''; apresentacao = ''; local = ''; data; horario;

  grupos; 

  constructor(private bdService: ApresentacaoService, 
              private grupoService: GrupoService) {
    this.grupoService.getGroups(['nome','cod'],['']).subscribe((res: any) => {
      console.log(res.data); 
      switch(res.status){
        case 'get grupos ok': 
          this.grupos = res.data; 
          break;
        default: 
        break;
      }
    });
  }

  ngOnInit() {
  }

  sendObject(){
    var apre = {
       cod_grupo: this.grupo,
       cod_apresentacao: this.apresentacao,
       local: this.local,
       data: this.data,
       horario: this.horario
    };
    console.log(apre);
    this.bdService.sendPresentation(apre).subscribe((res: any) => {
      switch(res.status) {
        case 'post apresentacao ok':
            console.log('dado inserido com sucesso!!!'); 
            this.clearErrors(); 
            this.unitySuccess = true; 
            setTimeout(() => {
              // Removendo o aviso depois de algum tempo!
              this.clearData(); 
              this.unitySuccess = false; 
            }, 4000);
            break;
          case 'already-exits': 
            this.alreadyExist = true; 
            break; 
          default: 
            this.unknowError = true; 
            break; 
      }
    });
  }

  clearData() {
    this.apresentacao = this.grupo = this.horario = this.local = ''; 
  }

  clearErrors(){
    this.alreadyExist = this.unknowError = false; 
  }

}
