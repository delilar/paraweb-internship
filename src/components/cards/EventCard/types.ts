export interface EventCardProps {
    imageUrl?: string;
    href?: string;
    isFavorite?: boolean;
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