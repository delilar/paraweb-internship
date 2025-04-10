export interface EventCardProps {
    imageUrl?: string;
    tagTitle?: string;
    tagColor?: 'gray' | 'cyan' | 'purple' | 'green' | 'red' | 'blue';
    title?: string;
    coins?: number;
    startDate: Date;
    endDate: Date;
    duration?: string;
    location?: string;
    numberOfPeople?: number;
}