import {Config} from "ziggy-js";
import {User} from "@/types/inertia";

export type AuthData = {
    user: AuthenticatedUserData;
};
export type AuthenticatedUserData = {
    id: number;
    email: string;
    name: string;
    gravatar: string;
    email_verified_at: string | null;
};
export type FlashMessageData = {
    type: string;
    message: string;
};
export type PageProps = {
    auth: AuthData;
    flashMessage: FlashMessageData;
    ziggy?: Config & { location: string };
};
