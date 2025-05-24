export interface CheckboxProps {
    id?: string;
    label?: string;
    disabled?: boolean;
    checked?: boolean;
    className?: string;
    onChange?: (checked: boolean) => void;
}