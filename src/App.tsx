import styles from './App.module.scss';
import useDarkMode from './hooks/useDarkMode';

function App() {
	const { enabled, setEnabled } = useDarkMode();

	return (
		<div className={'content'}>
			<div className={styles.box}>
				<p className={styles.text}>{enabled ? 'Dark' : 'Light'}</p>
			</div>

			<button
				className={styles.button}
				onClick={() => setEnabled(!enabled)}
			>
				Toggle Dark Mode
			</button>
		</div>
	);
}

export default App;
