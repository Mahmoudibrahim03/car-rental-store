export interface cars {
  name: string;
  features: {
    airCondition: boolean | undefined;
    shifting: 'Automatic' | 'Manual';
  };
  city: string;
  image: string;
  dailyRate: number;
  id:number;
}
