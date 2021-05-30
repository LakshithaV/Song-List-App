import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../models/song.interface';
import { FirestoreService } from '../services/data/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public songList: Observable<Song[]>
  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    this.songList = this.firestoreService.getSongList();
  }
  

}
