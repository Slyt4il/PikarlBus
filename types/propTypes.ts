export interface InputFieldProps {
  label: string;
  type?: string;
  onValidityChange?: (hasValue: boolean) => void;
}

export interface CardProps {
  isOpen: boolean;
  onClose?: () => void;
}

export interface MenuProps {
  onB1Click?: () => void;
  onB2Click?: () => void;
  onB3Click?: () => void;
  onB4Click?: () => void;
  onB5Click?: () => void;
}
