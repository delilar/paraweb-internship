export interface AlertProps {
    type?: "success" | "error";
    title?: string;
    message?: string;
    onClose?: () => void;
    duration?: number | null;
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}