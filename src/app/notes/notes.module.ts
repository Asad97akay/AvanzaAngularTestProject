import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { NotesRoutingModule } from './notes-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    NotesRoutingModule
  ],
  declarations: [NotesComponent],
  bootstrap: [NotesComponent]
})
export class NotesModule { }
