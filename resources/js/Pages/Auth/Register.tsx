import {useEffect, FormEventHandler, ReactNode} from 'react';
import { GuestLayout } from '@/Layouts';
import { useForm } from '@inertiajs/react';
import UserRegisterForm, {initialRegistrationFormData} from "@/Components/Forms/UserRegistrationForm";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm(initialRegistrationFormData);

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const handleInputChange = (
        field: 'name' | 'email' | 'password' | 'password_confirmation' | 'terms',
        value: string | boolean
    ) => {
        setData(field, value);
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/register');
    };

    const hasTermsFeature = Boolean(import.meta.env.VITE_HAS_TERMS_AND_PRIVACY_POLICY_FEATURE);

    return (
        <UserRegisterForm
            data={data}
            errors={errors}
            processing={processing}
            hasTermsFeature={hasTermsFeature}
            onInputChange={handleInputChange}
            onSubmit={submit}
        />
    );
}

Register.layout = (page: ReactNode) => {
    return <GuestLayout header="Register" description="Register for your new account." children={page} />;
};
