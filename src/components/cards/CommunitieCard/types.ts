import React from "react";

export interface CommunitieCardProps {
    imageUrl?: string;
    href?: string;
    isFavorite?: boolean;
    tagTitle?: string;
    tagColor?: 'gray' | 'cyan' | 'purple' | 'green' | 'red' | 'blue';
    title?: string;
    userImageUrl?: string;
    fullname?: string;
    jobTitle?: string; 
    onClick?: (e: React.MouseEvent) => void;
}