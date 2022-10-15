import { Subjects } from "./subjects";
import { OrderStatus } from "./types/order-status";

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    status: OrderStatus;
    userId: string;
    price: number;
    expiresAt: string; // Remember: these things are going to be sent over as decoded json strings
    ticket: {
      id: string;
      price: number;
    }
  };
}
