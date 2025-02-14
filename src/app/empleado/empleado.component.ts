import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';

@Component({
  selector: 'app-empleado',
  imports: [FormsModule],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent implements OnInit{
  nombre ="Pablo";
  apellido="Diaz";
  edad=18;
  direccion="";
  empresa="";
  nacionalidad="Española";
  habilitacionCuadro = false;
  usuRegistrado=false;
  textoDeRegistro="No hay nadie registrado";

  getRegistroUsuario(){
    this.usuRegistrado=false;
  }

  setUsuarioRegistrado(event:Event){
   // alert("El usuario se acaba de registrar")
   //this.textoDeRegistro="El usuario se acaba de registrar";
   if((<HTMLInputElement>event.target).value == "si"){
    this.textoDeRegistro="El usuario se acaba de registrar";
   }
    else{
      this.textoDeRegistro="No hay nadie registrado";
    }
  }

  cambiaEmpresa(event:Event){
    this.empresa=(<HTMLInputElement>event.target).value;
  }

  getEdad(){
    return this.edad;
  }


 
  constructor(){}

  ngOnInit(): void {
   
  }

}
