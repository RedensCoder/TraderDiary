import FormsUI from './forms.module.css';

export const Input = ({value, type = "text", required = true, placeholder, id, onChange}) => {
    return (
        <input onChange={onChange} value={value} id={id} className={FormsUI.form_control} type={type} placeholder={placeholder} required={required} />
    )
}

export const Label = ({children, For}) => {
    return (
        <label className={FormsUI.form_label} htmlFor={For}>{children}</label>
    )
}

export const InputGroupH = ({children}) => {
    return (
        <div className={FormsUI.input_groupH}>
            {children}
        </div>
    )
}

export const InputGroup = ({children}) => {
    return (
        <div className={FormsUI.input_group}>
            {children}
        </div>
    )
}