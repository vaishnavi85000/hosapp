import { Component, Optional } from '@angular/core';
import { GlobalUI } from '../shared';
import { CommonModule } from '@angular/common';
import { TabsPage } from '../tabs/tabs.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [...GlobalUI, CommonModule],
})
export class Tab3Page {
  // Admin Search Logic
  allTenants = [
    { name: 'Rahul Sharma', room: '101', status: 'Paid', phone: '9876543210' },
    { name: 'Aditi Verma', room: '204', status: 'Pending', phone: '9876543211' }
  ];
  filteredTenants = [...this.allTenants];

  constructor(@Optional() public tabsPage: TabsPage) {}

  handleSearch(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredTenants = this.allTenants.filter(t => 
      t.name.toLowerCase().includes(query) || t.room.includes(query)
    );
  }

  submitComplaint() {
    alert('Complaint submitted to the warden successfully!');
  }
}