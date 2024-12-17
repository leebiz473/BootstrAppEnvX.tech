import { PagePropsData } from '@/types';
import { Head } from '@inertiajs/react';
import { AppLayout } from '../Layouts';
import { Card, Container } from '@/Components/ui';

export default function Dashboard({ auth }: PagePropsData) {
    return (
        <>
            <Head title="Dashboard" />

            <Container className="py-12">
                <Card className="p-6 w-full">Hello, {auth.user.name}!</Card>
            </Container>
        </>
    );
}

Dashboard.layout = (page: any) => <AppLayout children={page} />;
