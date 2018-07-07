import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes.component';

const noteRoutes: Routes = [
    {
        path: '',
        component: NotesComponent
    }
];

@NgModule({

  imports: [RouterModule.forChild(noteRoutes)],
  exports: [RouterModule],

  declarations: []
})
export class NotesRoutingModule { }
