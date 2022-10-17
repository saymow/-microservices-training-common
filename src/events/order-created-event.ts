import { Subjects } from "./subjects";
import { OrderStatus } from "./types/order-status";

// *:  Rather than relying on how Date is turned to string, which takes into account timezone differences, 
// we're going to manage date conversion ourselves - using ISO date strings in a UTC format

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    version: number;
    status: OrderStatus;
    userId: string;
    expiresAt: string; // *
    ticket: {
      id: string;
      price: number;
    }
  };
}
