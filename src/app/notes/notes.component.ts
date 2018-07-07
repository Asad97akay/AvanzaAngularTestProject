import { Component, OnInit, ViewChild } from '@angular/core';
import { Users } from '../models/users.model'
import { UserService } from '../services/user.service'
import { MatTable } from '@angular/material';

declare var window: any;
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  providers: [UserService]
})
export class NotesComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<any>;
  columnsToDisplay = ['nameColumn', 'messageColumn', 'noteDate'];

  Guid: any;
  userName: string;
  note: string
  userNotesList: Array<any> = [];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.getUserInfo();
  }

  generateGUID(): string {
    
    const nav = window.navigator;
    this.Guid = nav.mimeTypes.length;
    this.Guid += nav.userAgent.replace(/\D+/g, '');
    this.Guid += nav.plugins.length;
    this.Guid += screen.height || '';
    this.Guid += screen.width || '';
    this.Guid += screen.pixelDepth || '';
    return this.Guid;
  }


  saveNote(): void {

    let userModel = {
      guid: this.Guid,
      name: this.userName,
      message: this.note,
      date: new Date()
    }

    this._userService.saveUserInfo(userModel).then(res => {
      if (res.message) {
        this.userName = "";
        this.note = "";
        // localStorage.setItem('_UUID', this.Guid);
        this.userNotesList.unshift(res.note);
      }
    }).then(() => this.table.renderRows()).catch(err => {
      console.log(err);
    })


  }


  getUserInfo() {
    this._userService.getUserInfo(this.generateGUID()).then(res => {
      this.userNotesList = res;
    }).catch(err => {
      console.log(err);
    })
  }

}
