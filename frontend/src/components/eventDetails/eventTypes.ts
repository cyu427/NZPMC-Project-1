export interface EventDetails {
    id: string;
    title: string;
    dateTime: string;
    time: string;
    location: string;
    cost: number;
    description: string;
  }
  
  export interface EventDetailsProps {
    eventId: string;
    open: boolean;
    onClose: () => void;
    onJoin?: () => void;
    admin?: boolean;
  }
  
  