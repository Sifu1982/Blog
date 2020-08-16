import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  formulario: FormGroup;

  constructor(private postsService: PostsService, private router: Router) {
    this.formulario = new FormGroup({
      titulo: new FormControl(''),
      texto: new FormControl(''),
      autor: new FormControl(''),
      imagen: new FormControl(''),
      fecha: new FormControl(new Date()),
      categoria: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const response = this.postsService.agregarPost(this.formulario.value)

    this.router.navigate(['blog']);

    localStorage.setItem('Formulario por categoría', response['Formulario por categoría'])
  }
}
