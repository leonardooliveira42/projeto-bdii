import { Injectable } from '@angular/core';
import { BancoDeDadosService } from './banco-de-dados.service';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  constructor(private db: BancoDeDadosService) { }

  sendRoom(obj: any) {
    return this.db.insertData('salas', obj);
  }

  getRoom(project: String[], params: String[]){
    return this.db.selectData('salas',project, params);
  }
}
