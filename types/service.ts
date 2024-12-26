export interface Service {
  id: string;
  title: string;
  description: string;
  time: {
    seconds: number;
    nanoseconds: number;
  };
  teacher: string;
}
