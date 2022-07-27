import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteItemComponent } from './note-item/note-item.component';

const routes: Routes =
[ { path: '', component: NoteItemComponent },]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
