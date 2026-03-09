import { Component, Optional } from '@angular/core';
import { GlobalUI } from '../shared';
import { CommonModule } from '@angular/common';
import { TabsPage } from '../tabs/tabs.page'; // Ensure this path is correct

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [...GlobalUI, CommonModule],
})
export class Tab2Page {
  // Navigation State
  viewMode: 'blocks' | 'rooms' = 'blocks';
  selectedBlockName: string = '';

  // Admin Data
  blocks = [
    { name: 'Block A', count: 24, color: '#4285F4' },
    { name: 'Block B', count: 18, color: '#34A853' },
    { name: 'Block C', count: 12, color: '#FBBC05' },
    { name: 'VIP Wing', count: 6, color: '#EA4335' }
  ];

  rooms = [
    { no: '101', type: 'Double', status: 'Occupied' },
    { no: '102', type: 'Single', status: 'Available' },
    { no: '103', type: 'Double', status: 'Available' },
    { no: '104', type: 'Triple', status: 'Occupied' },
  ];

  // Tenant Data (Fixes the 'rentHistory' error)
  rentHistory = [
    { month: 'March 2026', date: 'Mar 02', amount: '₹12,000' },
    { month: 'February 2026', date: 'Feb 05', amount: '₹12,000' },
    { month: 'January 2026', date: 'Jan 04', amount: '₹12,000' }
  ];

  // Fixes the 'tabsPage' error by making it public
  constructor(@Optional() public tabsPage: TabsPage) {}

  openBlock(blockName: string) {
    this.selectedBlockName = blockName;
    this.viewMode = 'rooms';
  }

  goBack() {
    this.viewMode = 'blocks';
  }
}