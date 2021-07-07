/// <reference types="react" />
import './header.css';
interface HeaderProps {
    user?: {};
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void;
}
export declare const Header: ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => JSX.Element;
export {};
