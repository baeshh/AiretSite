import { Contact, InsertContact } from "../shared/schema.js";

export interface IStorage {
  // Contact form storage
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private contacts: Contact[] = [];

  async createContact(contact: InsertContact): Promise<Contact> {
    const newContact: Contact = {
      ...contact,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date(),
    };
    this.contacts.push(newContact);
    return newContact;
  }

  async getContacts(): Promise<Contact[]> {
    return [...this.contacts];
  }
}

export const storage = new MemStorage();