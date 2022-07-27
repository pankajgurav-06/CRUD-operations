import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteItemComponent } from './note-item/note-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud_operation';
  constructor(private dialog: MatDialog) {

  }

  openDialog() {
    this.dialog.open(AddNoteComponent, {
      width:'30%'
    });
  }

}
