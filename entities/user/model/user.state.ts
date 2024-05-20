import { atom } from 'jotai';
import { User } from './user.model';

export interface IUserState {
	profile: User | null;
	isLoading: boolean;
	error: string | null;
}

export const profileAtom = atom<IUserState>({
	profile: {
		id: 1,
		name: 'Adel',
	},
	isLoading: false,
	error: null,
});
