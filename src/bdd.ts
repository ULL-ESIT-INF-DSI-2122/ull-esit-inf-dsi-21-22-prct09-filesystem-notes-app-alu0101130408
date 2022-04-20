const low = require('lowdb');
const fs = require('fs');
import {spawn} from 'child_process';
const FileSync = require('lowdb/adapters/FileSync');

import {Note} from './note';

export class Bdd {
  private dataBase: any;
  private fileName: string = '';

  constructor(userName: string, Notes: Note[] = []) {
    if (fs.readdirSync("./src/database").lenght === 0) {
      this.fileName = userName + ".json";
      const touch = spawn('touch', [this.fileName]);
      const adapter = new FileSync(`./src/database/${this.fileName}`);
      this.dataBase = low(adapter);
    } else {
      this.fileName = userName + ".json";
      const adapter = new FileSync(`./src/database/${this.fileName}`);
      this.dataBase = low(adapter);
    }

    if (!this.dataBase.get('User').find({name: userName}).value()) {
      this.addUser(userName);
    } else {
      const size: number = this.dataBase.get('User').find({name: userName}).get('notes').size().value();
      for (let i: number = 0; i < size; i++) {
        Notes.push(new Note(this.dataBase.get('User').find({name: userName}).get(`notes[${i}].title`).value(), this.dataBase.get('User').find({name: userName}).get(`notes[${i}].body`).value(), this.dataBase.get('User').find({name: userName}).get(`notes[${i}].color`).value()));
      }
    }
  }

  addUser(name: string) {
    this.dataBase.defaults({User: []}).write();
    this.dataBase.get('User').push({name: name, notes: [], id: Math.floor(Math.random() * (1000 - 1) + 1)}). write();
  }

  updateDbb(userName: string, Notes: Note[]) {
    this.dataBase.get('User').find({name: userName}).get("notes").remove().write();
    Notes.forEach((item) => {
      this.dataBase.get('User').find({name: userName}).get('notes').push({title: item.geTitle(), body: item.getBody(), color: item.getColor()}).write();
    });
  }
}
