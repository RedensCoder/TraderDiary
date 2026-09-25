import LayoutUI from "./layouts.module.css";

export const AuthLayout = ({children}) => {
    return (
        <div className={LayoutUI.auth}>
            {children}
        </div>
    )
}