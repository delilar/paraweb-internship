export interface TabProps {
  count?: number; // Количество элементов для отображения
  label: string; // Надпись на табе (например, "Tab")
  isActive?: boolean; // Активен ли таб
  onClick?: () => void; // Обработчик клика
  disabled?: boolean; // Заблокирован ли таб
}