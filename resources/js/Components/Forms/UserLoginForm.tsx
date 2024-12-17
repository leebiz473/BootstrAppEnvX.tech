import { FormEventHandler } from 'react';
import { Button, buttonStyles, Checkbox, Form, TextField } from '@/Components/ui';
import { Head, Link } from '@inertiajs/react';

// formConfig.ts (Optional)
export const initialLoginFormData = {
    email: '',
    password: '',
    remember: false,
};

export type LoginFields = 'email' | 'password' | 'remember';

export type LoginFormData = typeof initialLoginFormData;

type LoginErrors = Partial<Record<keyof LoginFormData, string>>;


type UserLoginFormProps = {
    data: LoginFormData;
    errors: LoginErrors;
    processing: boolean;
    onInputChange: (field: LoginFields, value: string | boolean) => void;
    onSubmit: FormEventHandler;
    canResetPassword?: boolean;
    status?: string;
};

export default function UserLoginForm({
    data,
    errors,
    processing,
    onInputChange,
    onSubmit,
    canResetPassword,
    status,
}: UserLoginFormProps) {
    return (
        <>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <Form onSubmit={onSubmit} validationErrors={errors} className="space-y-6">
                <TextField
                    type="email"
                    name="email"
                    label="Email"
                    value={data.email}
                    className="mt-1 block w-full"
                    autoComplete="username"
                    autoFocus
                    onChange={(v) => onInputChange('email', v)}
                    errorMessage={errors.email}
                    isRequired
                />

                <TextField
                    type="password"
                    name="password"
                    label="Password"
                    value={data.password}
                    className="mt-1 block w-full"
                    autoComplete="current-password"
                    onChange={(v) => onInputChange('password', v)}
                    errorMessage={errors.password}
                    isRequired
                />

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(checked) => onInputChange('remember', checked)}
                        />
                        <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <Button className="ms-4" type="submit" isDisabled={processing}>
                        Log in
                    </Button>
                </div>
            </Form>
        </>
    );
}
