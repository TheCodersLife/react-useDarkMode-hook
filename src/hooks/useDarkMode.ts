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

	useEffect(() => {
		const isDarkMode = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches;
		const isLightMode = window.matchMedia(
			'(prefers-color-scheme: light)'
		).matches;

		if (isDarkMode) setEnabled(true);
		if (isLightMode) setEnabled(false);
	}, []);

	return { enabled, setEnabled };
};

export default useDarkMode;
