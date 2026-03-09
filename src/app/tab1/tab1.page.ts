import { Component,Optional } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalUI } from '../shared';
import { CommonModule } from '@angular/common';
import { TabsPage } from '../tabs/tabs.page'; // Import the parent class
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [...GlobalUI, CommonModule],
})
export class Tab1Page {
  stats = [
    { label: 'Total Tenants', value: '42', icon: 'people-outline', color: 'primary' },
    { label: 'Empty Beds', value: '8', icon: 'bed-outline', color: 'success' },
    { label: 'Pending Rent', value: '₹12k', icon: 'folder', color: 'danger' },
    { label: 'Visitors Today', value: '5', icon: 'person-outline', color: 'warning' }
  ];

  constructor(private router: Router,
    @Optional() public tabsPage: TabsPage
  ) {}

  openProfile() {
    alert('Admin Profile: Hostel Manager');
  }

  goToRooms() {
    this.router.navigate(['/tabs/tab2']);
  }

  demoSwitch() {
    if (this.tabsPage) {
      this.tabsPage.toggleRole(); // Calls the function in tabs.page.ts
    }
  }
}