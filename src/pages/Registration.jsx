import {useState} from "react";
import {Link} from "react-router-dom";

// UI
import {AuthLayout} from '../UI/layouts/auth.jsx';
import {Button} from '../UI/buttons/default.jsx'
import {Card} from '../UI/cards/default.jsx'
import {Input, Label, InputGroup} from '../UI/forms/default.jsx'

export const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [subPassword, setSubPassword] = useState('');

    return (
        <>
            <AuthLayout>
                <Link to="/"><h1 className="h1">Дневник Трейдера</h1></Link>
                <Card>
                    <p className="text-lg text-center">Регистрация</p>
                    <InputGroup>
                        <Label For={"mail"}>Почта</Label>
                        <Input onChange={e => {setEmail(e.target.value)}} value={email} id={"mail"} type={"email"} placeholder={"name@company.ru"} />
                    </InputGroup>
                    <InputGroup>
                        <Label For={"password"}>Пароль</Label>
                        <Input onChange={e => {setPassword(e.target.value)}} value={password} id={"password"} type={"password"} placeholder={"••••••••"} />
                    </InputGroup>
                    <InputGroup>
                        <Label For={"sub_password"}>Подтвердите пароль</Label>
                        <Input onChange={e => {setSubPassword(e.target.value)}} value={subPassword} id={"sub_password"} type={"password"} placeholder={"••••••••"} />
                    </InputGroup>
                    <p className="text-md">Есть аккаунт? <Link className="text-md text-primary" to="/signin">Авторизация</Link></p>
                    <Button Text={"Регистрация"} />
                </Card>
            </AuthLayout>
        </>
    )
}