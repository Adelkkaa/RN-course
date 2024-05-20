export interface IUser {
	id: number;
	name: string;
	surname?: string;
	photo?: string;
}

export interface IAchievements {
	alias: string;
	createdAt: string;
	event: string;
	icons: unknown[];
	id: number;
	necessaryProgress: number;
	status: string;
	text: string;
	title: string;
	updatedAt: string;
}

export interface IProfileResponse {
	achievements: IAchievements;
	activity: null;
	profile: IUser;
}
