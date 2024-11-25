import { AppNavbar } from '@/Layouts/app-navbar';
import { FlashMessage } from '@/Components/flash-message';
import { Footer } from '@/Components/footer';
import { PropsWithChildren } from 'react';

export function AppLayout({ children }: PropsWithChildren) {
    return (
        <div>
            <FlashMessage />
            <AppNavbar>{children}</AppNavbar>
            <Footer />
        </div>
    );
}
