import { useEffect, useState } from 'react';

const useDarkMode = () => {
	const [enabled, setEnabled] = useState(false);

	const body = document.body;

	useEffect(() => {
		if (!enabled) {
			body.setAttribute('theme', 'light');
			return;
		}

		body.setAttribute('theme', 'dark');

		return;
	}, [enabled]);

	return { enabled, setEnabled };
};

export default useDarkMode;
