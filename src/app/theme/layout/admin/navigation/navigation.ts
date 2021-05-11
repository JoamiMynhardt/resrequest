import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'dashbaord-heading',
    title: 'Dashboard',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'dashbaord',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard',
        classes: 'nav-item',
        icon: 'feather icon-monitor'
      }
    ]
  },
  {
    id: 'admin-panel',
    title: 'Admin Panel',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'room-management',
        title: 'Room Management',
        type: 'collapse',
        icon: 'feather icon-home',
        children: [
          {
            id: 'all-rooms',
            title: 'All Rooms',
            type: 'item',
            url: '/rooms'
          },
          {
            id: 'add-room',
            title: 'Add Room',
            type: 'item',
            url: '#'
          },
          {
            id: 'room-types',
            title: 'Room Types',
            type: 'item',
            url: '#'
          },
          {
            id: 'amenities',
            title: 'Amenities',
            type: 'item',
            url: '#'
          },
          {
            id: 'room-availablity',
            title: 'Room Availablity',
            type: 'item',
            url: '#'
          },
          {
            id: 'services',
            title: 'Services',
            type: 'item',
            url: '#'
          }
        ]
      },
      {
        id: 'booking',
        title: 'Booking',
        type: 'collapse',
        icon: 'feather icon-calendar',
        children: [
          {
            id: 'track-bookings',
            title: 'Track Bookings',
            type: 'item',
            url: '#'
          },
          {
            id: 'booking-confirmation',
            title: 'Booking Confirmation',
            type: 'item',
            url: '#'
          },
          {
            id: 'add-booking',
            title: 'Add-Booking',
            type: 'item',
            url: '#'
          },
          {
            id: 'enquiries',
            title: 'Enquiries',
            type: 'item',
            url: '#'
          }
        ]
      },
      {
        id: 'users',
        title: 'Users',
        type: 'collapse',
        icon: 'feather icon-users',
        children: [
          {
            id: 'all-users',
            title: 'All Users',
            type: 'item',
            url: '#'
          },
          {
            id: 'user-roles',
            title: 'User Roles',
            type: 'item',
            url: '#'
          },
          {
            id: 'add-user',
            title: 'Add User',
            type: 'item',
            url: '#'
          }
        ]
      },
      {
        id: 'media',
        title: 'Media',
        type: 'collapse',
        icon: 'feather icon-image',
        children: [
          {
            id: 'videos',
            title: 'Videos',
            type: 'item',
            url: '#'
          },
          {
            id: 'images',
            title: 'Images',
            type: 'item',
            url: '#'
          }
        ]
      },
      {
        id: 'email',
        title: 'Email',
        type: 'collapse',
        icon: 'feather icon-mail',
        children: [
          {
            id: 'mail-inbox',
            title: 'Inbox',
            type: 'item',
            url: '#'
          },
          {
            id: 'mail-read',
            title: 'Read Mail',
            type: 'item',
            url: '#'
          },
          {
            id: 'mail-compose',
            title: 'Compose Mail',
            type: 'item',
            url: '#'
          }
        ]
      },
      {
        id: 'finanaces',
        title: 'Finances',
        type: 'collapse',
        icon: 'feather icon-credit-card',
        children: [
          {
            id: 'reports',
            title: 'Reports',
            type: 'item',
            url: '#'
          },
          {
            id: 'invoices',
            title: 'Invoices',
            type: 'item',
            url: '#'
          },
          {
            id: 'currencies',
            title: 'currencies',
            type: 'item',
            url: '#'
          },
          {
            id: 'payment-type',
            title: 'Payment-Type',
            type: 'item',
            url: '#'
          }
        ]
      },

    ]
  },
  {
    id: 'Authentication',
    title: 'Authentication',
    type: 'group',
    icon: 'feather icon-file-text',
    children: [
      {
        id: 'auth',
        title: 'Authentication',
        type: 'collapse',
        icon: 'feather icon-lock',
        children: [
          {
            id: 'sign-up',
            title: 'Sign Up',
            type: 'item',
            url: '/sign-up'
          },
          {
            id: 'sign-in',
            title: 'Sign In',
            type: 'item',
            url: '/sign-in'
          }
        ]
      }
    ]
  }
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
