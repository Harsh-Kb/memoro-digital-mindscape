export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface AppSettings {
  darkMode: boolean;
  autoSave: boolean;
  reminderNotifications: boolean;
}