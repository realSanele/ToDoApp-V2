
import { Injectable } from '@angular/core';
import { Note } from '../../mockDB/note.model';
import { Storage } from '@ionic/storage';

@Injectable()
export class NoteServiceProvider {

  /*create array object*/
  private notes: Note[] = [];
  private note: Note;

  constructor( public storage: Storage) {
    console.log('Hello NoteServiceProvider Provider');
  }

  saveNote(note: Note) {
    /*push the object*/
    note.createDate = Date.now();
    this.notes.push(note);
    this.storage.set('notes', this.notes);
  }

  getAllNotes() {
    //retrun all notes
   // return [...this.notes];
    //return this.notes.slice();
    return this.storage.get('notes').then(
      (notes) => {
        this.notes = notes == null ? [] : notes;
        return [...this.notes];
      }
    )
  }

  getNote(createDate: number){
    return this.storage.get('notes').then((notes) => {
      this.note = [...notes].find(n => n.createDate === createDate);
      return this.note;
    });
  }

  deleteNote(createDate: number){
    this.notes = this.notes.filter((note) => {
      return note.createDate !== createDate
    })
    this.storage.set('notes', this.notes);
  }

}
