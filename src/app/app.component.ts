import { Component, OnInit } from '@angular/core';
import { ExcelServiceService } from './services/excel-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExcelDto } from './models/ExcelDto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(public excelService:ExcelServiceService, private formBuilder:FormBuilder){}
  public formExcel : FormGroup = new FormGroup({});
  title = 'formularioExcel';
  ngOnInit(): void {
    this.initialiceForm()
  }
  agregarFila(){
    let dataForm = this.formExcel.value
    let datos : ExcelDto = {
      nombre: dataForm.nombre,
      apellido: dataForm.apellido,
      telefono: dataForm.telefono
    }
    this.excelService.insertarFila(datos).subscribe({
      next: res=>{
        console.log(res);
      }
    })
    
  }
  initialiceForm(){
    this.formExcel = this.formBuilder.group({
      nombre:['',[]],
      apellido:['',[]],
      telefono:['',[]],
    });
  }
}
