export interface InputFieldProps {
    label: string;
    type?: string;
    onValidityChange?: (hasValue: boolean) => void;
}