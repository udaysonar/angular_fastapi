import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';

import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { GuestListComponent } from './guest-list/guest-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,HttpClientModule,FormsModule,ReactiveFormsModule,GuestListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bhakt Niwas Template';

  API_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.get_guests();
  }
  
  get_guests() {
    this.http.get(this.API_URL + '/get_guests').subscribe((data) => {
      console.log(data);
    });
  }
}
