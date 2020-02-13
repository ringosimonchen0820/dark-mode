import React, {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

//* Build a second custom hook that sets the `dark-mode` class on the body element
const useDarkMode = function(key) {
	const [darkMode, setDarkMode] = useLocalStorage('darkMode', key);
	const body = document.querySelector('body');
	useEffect(() => {
		if (darkMode == true) {
			body.classList.add('dark-mode');
		} else {
			body.classList.remove('dark-mode');
		}
	});
	return [darkMode, setDarkMode];
};

export default useDarkMode;