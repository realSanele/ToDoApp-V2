import { Note } from './../../mockDB/note.model';
import { NoteServiceProvider } from './../../providers/note-service/note-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {

  note: Note;

  constructor(private noteService: NoteServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.note = this.navParams.get('note');
  }

  ionViewDidLoad() {
    console.log('ViewPage has loaded..');
  }

  deleteNote(createDate: number){
    this.noteService.deleteNote(createDate);
    this.navCtrl.pop();
  }
}
