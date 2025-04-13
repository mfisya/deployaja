// import * as db from '$lib/server/database';
import type { PageServerLoad } from './$types';
import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
		return { success: true };
	}
} satisfies Actions;

export const load: PageServerLoad = async ({ params }) => {
	return {
		post: {"ok":true}
	};
};