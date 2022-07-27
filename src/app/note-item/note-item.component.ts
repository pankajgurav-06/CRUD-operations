import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddNoteComponent } from '../add-note/add-note.component';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss']
})
export class NoteItemComponent implements OnInit {

  displayedColumns = ['id', 'userName','candidateId', 'lastUpdatedOn' , 'action']
  dataSource! : MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog, private api: ApiService){}
  
  ngOnInit(): void {
    this.getAllNote();
  }

  editNote(note :any) {
    this.dialog.open(AddNoteComponent, {
     width:'40%',
     data: note
    }).afterClosed().subscribe(val=>{
      if(val == 'update'){
        this.getAllNote()
      }
    })
  }

  deleteAddedNote(id:number){
    console.log("Delete button click");
    this.api.deleteNote(id).subscribe(()=>{console.log('Deleted')})
  }

  getAllNote(){
    this.api.getNote()
    .subscribe((data)=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    },(error)=>{console.log(error)})
    
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
