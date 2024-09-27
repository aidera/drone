import DroneComposition from './components/DroneComposition/DroneComposition';
import Content from './components/Content/Content';
import styles from './App.module.scss';

function App() {
  return (
    <main className={styles.main}>
      <Content />
      <div className={styles['drone-container']}>
        <DroneComposition />
      </div>
      <div className={styles['canvas-overlay']}></div>
    </main>
  );
}

export default App;
