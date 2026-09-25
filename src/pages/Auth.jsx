import {Link} from "react-router-dom";

// UI
import {AuthLayout} from '../UI/layouts/auth.jsx';
import {Button} from '../UI/buttons/default.jsx'
import {Card} from '../UI/cards/default.jsx'
import {Input, Label, InputGroup} from '../UI/forms/default.jsx'

export const Auth = () => {
    return (
        <>
            <AuthLayout>
                <h1 className="h1">Дневник Трейдера</h1>
                <Card>
                    <InputGroup>
                        <Label For={"mail"}>Почта</Label>
                        <Input id={"mail"} type={"email"} placeholder={"name@company.ru"} />
                    </InputGroup>
                    <InputGroup>
                        <Label For={"password"}>Пароль</Label>
                        <Input id={"password"} type={"password"} placeholder={"••••••••"} />
                    </InputGroup>
                    <p className="text-sm">Нет аккаунта? <Link className="text-sm text-primary" to="/signup">Регистрация</Link></p>
                    <Button Text={"Авторизация"} />
                </Card>
            </AuthLayout>
        </>
    )
}