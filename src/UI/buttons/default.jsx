import ButtonsUI from './Buttons.module.css';

export const Button = ({Text, Disabled = false}) => {
    if (Disabled) {
        return (
            <button className={ButtonsUI.disabled}>{Text}</button>
        )
    } else {
        return (
            <button className={ButtonsUI.default}>{Text}</button>
        )
    }
}