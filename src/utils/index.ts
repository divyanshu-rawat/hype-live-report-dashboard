export type eventType = {
  displayName: string;
  participants: number;
  revenue: number;
  sellThrough: number;
  stock: number;
};

export const fetchData = async (): Promise<eventType[]> => {
  const events = await fetch('./data.json');
  const eventsJson = await events.json();
  return (eventsJson as { data: eventType[] }).data;
};
