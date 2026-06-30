export interface User {
	id?: string;
	fullName: string;
	email: string;
	subdomain: string;
	role?: "admin" | "user";
	photoURL?: string | null;
	emailVerified?: boolean;
	createdAt?: number;
	updatedAt: number;
}
