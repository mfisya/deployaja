import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/member')) {
		if (!event.cookies.get("userId")){
			return new Response('Redirect', {
				status: 303,
				headers: { Location: '/signup' }})
		}
	}

	const response = await resolve(event);
	return response;
};