import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExcelDto } from '../models/ExcelDto';

@Injectable({
  providedIn: 'root'
})
export class ExcelServiceService {
  constructor(private http:HttpClient) { }
  insertarFila(data:ExcelDto){
    return this.http.post('https://localhost:7274/Excel/AgregarColumna',data, {
      responseType: 'text'
    })
  }
}
