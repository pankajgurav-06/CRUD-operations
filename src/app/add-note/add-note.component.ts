import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent implements OnInit {
  addNoteForm!: FormGroup;
  actionBtn: string = 'save';
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editNote: any,
    private dialogRef: MatDialogRef<AddNoteComponent>
  ) {}

  ngOnInit(): void {
    this.addNoteForm = this.formBuilder.group({
      id: [,Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required],
      personFormId: ['null', Validators.required],
      noteTypeId: [5, Validators.required],
      candidateId: [5, Validators.required],
      personEventRegistryId: ['null', Validators.required],
      userId: [9, Validators.required],
      userName: ['', Validators.required],
      files:[[]]
    });

    if (this.editNote) {
      this.actionBtn = 'Update';
      this.addNoteForm.controls['id'].setValue(this.editNote.id);
      this.addNoteForm.controls['userName'].setValue(this.editNote.userName);
      // this.addNoteForm.controls['candidateId'].setValue(this.editNote.candidateId );
    }
  }

  addNote() {
    console.log(this.addNoteForm.value);
    if(this.addNoteForm.valid){
      this.addNoteForm.value.personFormId=Number(this.addNoteForm.value.personFormId)
      this.addNoteForm.value.noteTypeId=Number(this.addNoteForm.value.noteTypeId)
      this.addNoteForm.value.personEventRegistryId=Number(this.addNoteForm.value.personEventRegistryId)
      this.addNoteForm.value.candidateId=Number(this.addNoteForm.value.candidateId)
      this.addNoteForm.value.userId=Number(this.addNoteForm.value.userId)
      //  we added the below line
      this.addNoteForm.value.id=Number(this.addNoteForm.value.id)
      this.api.postNote(this.addNoteForm.value)
      .subscribe(res =>{
       console.log("Data pushed");
        this.addNoteForm.reset();
        this.dialogRef.close('save');
      })
    }
  }

  updateNote() {
    this.api.putNote(this.addNoteForm.value, this.editNote.id)
      .subscribe((res) => {
        alert('Note added successfully');
        this.addNoteForm.reset();
        this.dialogRef.close('update');
      },(error)=>{console.log(error ," error while update")})
  }
}
