import { useMemo } from 'react';
import { useLocation } from 'react-router';
import { BreadcrumbLink } from '@/components/header/Breadcrumbs/types';

// Dictionary mapping routes to their display names
const routeLabels: Record<string, string> = {
  '/': 'Главная',
  '/login': 'Логин',
  '/text-content': 'Текстовый контент',
  '/admin': 'Админ панель',
  '/dashboard': 'Дашборд',
  '/communities': 'Сообщества',
  '/portfolio': 'Портфолио',
  '/rating': 'Рейтинг',
};

export const useBreadcrumbs = (): BreadcrumbLink[] => {
  const location = useLocation();
  
  return useMemo(() => {
    const breadcrumbs: BreadcrumbLink[] = [
      {
        label: routeLabels['/'] || 'Главная',
        href: '/',
      }
    ];

    if (location.pathname === '/') {
      return breadcrumbs;
    }

    const pathSegments = location.pathname.split('/').filter(Boolean);
    
    let currentPath = '';
    
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      const label = routeLabels[currentPath] || 
        segment.charAt(0).toUpperCase() + segment.slice(1);
      
      const isLastSegment = index === pathSegments.length - 1;
      
      breadcrumbs.push({
        label,
        href: isLastSegment ? undefined : currentPath,
        disabled: isLastSegment
      });
    });

    return breadcrumbs;
  }, [location.pathname]);
};

export default useBreadcrumbs;