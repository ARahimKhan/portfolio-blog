import { fail, type Actions } from '@sveltejs/kit';
import firebase from '$lib/server/firebase-config';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email');
		const name = formData.get('name');
		const message = formData.get('message');

		if (!(name && email && message)) {
			return fail(422, { blank: true });
		}

		if (!/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/gm.test(email.toString())) {
			return fail(400, { item: 'email', invalid: true, value: email });
		}

		const db = getFirestore(firebase);
		try {
			await addDoc(collection(db, 'messages'), {
				email,
				name,
				message,
				sent_at: serverTimestamp()
			});
		} catch (err) {
			return fail(400, { upload: true });
		}
		return { success: true };
	}
};
