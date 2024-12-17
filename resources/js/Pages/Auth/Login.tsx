import {useEffect, FormEventHandler, ReactNode} from 'react';
import { GuestLayout } from '@/Layouts';
import { useForm } from '@inertiajs/react';
import UserLoginForm, {initialLoginFormData} from "@/Components/Forms/UserLoginForm";

export default function Login({ status, canResetPassword }: { status?: string; canResetPassword: boolean }) {
    // Initialize the form data
    const { data, setData, post, processing, errors, reset } = useForm(initialLoginFormData);

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const handleInputChange = (field: 'email' | 'password' | 'remember', value: string | boolean) => {
        setData(field, value);
    };

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <UserLoginForm
            data={data}
            errors={errors}
            processing={processing}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
            canResetPassword={canResetPassword}
            status={status}
        />
    );
}

Login.layout = (page: ReactNode) => (
    <GuestLayout header="Log in" description="Log in with your credentials." children={page} />
);
