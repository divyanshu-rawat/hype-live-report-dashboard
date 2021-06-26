import { eventType } from '../types/global';

interface IObjectKeys {
  [key: string]: any;
}

export const fetchData = async (): Promise<eventType[]> => {
  const events = await fetch('./data.json');
  const eventsJson = await events.json();
  return (eventsJson as { data: eventType[] }).data;
};

export const aggregateData = (events: eventType[], field: keyof eventType): number =>
  // eslint-disable-next-line implicit-arrow-linebreak
  events.map((o: IObjectKeys) => o[field]).reduce((a, c) => a + c);

export const unitSold = (sellThrough: number, stock: number): number => (sellThrough * stock) / 100;

export const aggregateUnitSold = (events: eventType[]): number => {
  let aggregateUnitSoldCount = 0;
  events.forEach((event: eventType) => {
    aggregateUnitSoldCount += unitSold(event.sellThrough, event.stock);
  });

  return aggregateUnitSoldCount;
};
