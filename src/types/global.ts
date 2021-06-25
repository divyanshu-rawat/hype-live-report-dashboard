export type eventType = {
  displayName: string;
  participants: number;
  revenue: number;
  sellThrough: number;
  stock: number;
};

export type EventsAggregateViewType = {
  events: eventType[];
};
