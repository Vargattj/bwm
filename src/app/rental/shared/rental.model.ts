export class Rental {
  id: string; // Unique identifier as it will be stored in DB
  title: string; // Some nice place in LA
  city: string; // Los Angeles
  street: string; // Main Street
  category: string; // Apartment
  image: string;
  numOfRooms: number;
  description: string;
  dailyPrice: number;
  shared: boolean;
  createdAt: string;
}
