import { FormEventHandler } from 'react';
import { Button, buttonStyles, Checkbox, Form, TextField } from '@/Components/ui';
import { Head, Link } from '@inertiajs/react';

// formConfig.ts
export const initialRegistrationFormData = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
};

export type RegisterFields = 'name' | 'email' | 'password' | 'password_confirmation' | 'terms';

export type RegisterFormData = typeof initialRegistrationFormData;
export type RegisterErrors = Partial<Record<keyof RegisterFormData, string>>;

type RegisterFormProps = {
    // data: {
    //     name: string;
    //     email: string;
    //     password: string;
    //     password_confirmation: string;
    //     terms: boolean;
    // };
    // errors: {
    //     name?: string;
    //     email?: string;
    //     password?: string;
    //     password_confirmation?: string;
    //     terms?: string;
    // };
    data: RegisterFormData;
    errors: RegisterErrors;
    processing: boolean;
    hasTermsFeature: boolean;
    // onInputChange: (field: 'name' | 'email' | 'password' | 'password_confirmation' | 'terms', value: string | boolean) => void;
    onInputChange: (field: RegisterFields, value: string | boolean) => void;
    // onSubmit: FormEventHandler;
    onSubmit: FormEventHandler;
};

export default function UserRegisterForm({
    data,
    errors,
    processing,
    hasTermsFeature,
    onInputChange,
    onSubmit,
}: RegisterFormProps) {
    return (
        <>
            <Head title="Register" />

            <Form onSubmit={onSubmit} validationErrors={errors} className="space-y-6">
                <TextField
                    type="text"
                    name="name"
                    label="Name"
                    value={data.name}
                    className="mt-1"
                    autoComplete="name"
                    autoFocus
                    onChange={(v) => onInputChange('name', v)}
                    errorMessage={errors.name}
                    isRequired
                />

                <TextField
                    type="email"
                    name="email"
                    label="Email"
                    value={data.email}
                    className="mt-1"
                    autoComplete="username"
                    onChange={(v) => onInputChange('email', v)}
                    errorMessage={errors.email}
                    isRequired
                />

                <TextField
                    type="password"
                    name="password"
                    label="Password"
                    value={data.password}
                    autoComplete="current-password"
                    onChange={(v) => onInputChange('password', v)}
                    errorMessage={errors.password}
                    isRequired
                />

                <TextField
                    type="password"
                    label="Confirm Password"
                    name="password_confirmation"
                    value={data.password_confirmation}
                    className="mt-1"
                    onChange={(v) => onInputChange('password_confirmation', v)}
                    errorMessage={errors.password_confirmation}
                    isRequired
                />

                {hasTermsFeature && (
                    <div className="flex items-center gap-x-1">
                        <Checkbox
                            name="terms"
                            id="terms"
                            onChange={(checked: boolean) => onInputChange('terms', checked)}
                            isRequired
                            checked={data.terms}
                        >
                            I agree to the{' '}
                        </Checkbox>
                        <Link target="_blank" href={route('terms.show')}>
                            terms of service
                        </Link>{' '}
                        and{' '}
                        <Link target="_blank" href={route('privacy.show')}>
                            privacy policy
                        </Link>
                    </div>
                )}

                <div className="flex items-center justify-between">
                    <Link href={route('login')} className={buttonStyles({ appearance: 'outline' })}>
                        Already registered?
                    </Link>

                    <Button type="submit" isDisabled={processing}>
                        Register
                    </Button>
                </div>
            </Form>
        </>
    );
}
