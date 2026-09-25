import CardUI from "./cards.module.css";

export const Card = ({children}) => {
    return (
        <div className={CardUI.card}>
            {children}
        </div>
    )
}