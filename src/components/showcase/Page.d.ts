/// <reference types="react" />
import './page.css';
interface PageProps {
    user?: {};
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void;
}
export declare const Page: ({ user, onLogin, onLogout, onCreateAccount }: PageProps) => JSX.Element;
export {};
