import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Receta } from 'src/app/domain/receta';
import { RecetasService } from 'src/app/services/recetas.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.scss']
})
export class EnvioComponent {
  recetaForm: FormGroup;
  receta : Receta = new Receta();

  constructor(private router: Router, private recetaService: RecetasService, private formBuilder : FormBuilder){
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      console.log(params)
      this.receta = params['envio']
    }
    
    this.recetaForm = this.formBuilder.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      ingredientes: ['', Validators.required],
      pasos: ['', Validators.required],
    });

  }
  selectedImage: any;

  

  saveReceta(){
    
    console.log('hola mundo')
    this.recetaService.addReceta(this.receta);
    this.receta = new Receta();
    console.log(this.recetaService.getRecetas());
    
  }

  onSubmit() {
    if (this.recetaForm.valid) {
      alert('Ingresado con exito')
    } else {
      alert('Por favor, rellenar todos los campos')
    }
  }

  goReceta(){
    this.router.navigate(['paginas/recetas'])
  }

 
}
