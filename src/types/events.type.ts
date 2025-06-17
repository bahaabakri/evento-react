export interface EventModel {
    id:number,
    image: string
    title: string,
    date: string,
    place:string,
    order?:number
    description: string
}
export type EventType = {
    id: number;
    name: string;
    description: string;
    date: string;
    location: string;
    isActive: boolean;
    imagesUrls: string[];
} 


