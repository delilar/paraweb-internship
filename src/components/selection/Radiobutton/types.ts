export interface RadiobuttonProps {
    id?: string;
    name?: string;
    label?: string;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
}