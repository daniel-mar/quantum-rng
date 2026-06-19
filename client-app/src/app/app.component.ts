import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuantumService } from './quantum/quantum.service';
import { NumberCardComponent } from './number-card/number-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NumberCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  history: number[] = [];

  constructor(private qs: QuantumService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    const data = localStorage.getItem('qrng_history');
    console.log("LocalStorage raw data:", data);
    this.history = JSON.parse(data || '[]');
    console.log("History array content:", this.history);
  }

  generate() {
    // Clear broken storage if it exists
    if (localStorage.getItem('qrng_history') === 'null') {
      localStorage.removeItem('qrng_history');
    }

    this.qs.getRandom().subscribe({
      next: (data) => {
        console.log("Raw API Response:", data); // Check if this is truly what you expect
        
        if (data && typeof data.random_number !== 'undefined') {
          const newNum = data.random_number;
          this.history.unshift(newNum);
          localStorage.setItem('qrng_history', JSON.stringify(this.history));
          this.cdr.detectChanges(); // Trigger UI refresh
        } else {
          console.error("Data structure unexpected:", data);
        }
      },
      error: (err) => console.error("API Error:", err)
    });
  }
  
  get historyList() {
    return this.history;
  }

  clearHistory() {
    this.history = [];
    localStorage.removeItem('qrng_history');
    // Force update after clearing
    this.cdr.detectChanges();
  }

  
}