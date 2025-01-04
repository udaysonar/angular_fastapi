import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngFor

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css'],
  standalone: true,  // Add this line for standalone component
  imports: [CommonModule]  // Include CommonModule in the imports
})
export class GuestListComponent implements OnInit {
  guests: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Fetch guest data from backend API (replace with your actual API URL)
    this.http.get<any[]>('http://localhost:8000/get_guests')  // Example URL; change to your actual API endpoint
      .subscribe(
        data => {
          this.guests = data;
        },
        error => {
          console.error('Error fetching guest data:', error);
        }
      );
  }
}
