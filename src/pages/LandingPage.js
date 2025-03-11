import styles from './LandingPage.module.css';

function LandingPage() {
    return (
        <div className={styles.landingContainer}>
            <div className={styles.backgroundImage}></div>
            <div className={styles.overlay}></div>

            <div className={styles.contentBox}>
                <h1 className={styles.title}>
                    "Empowering Connections, Building Futures!"
                </h1>
                <p className={styles.subtitle}>
                    Join IMAPA USA Canasdfasdfasdfada and be part of a thriving
                    community where opportunities, ideas, and success come
                    together.
                </p>
                <button className={styles.button}>Get Started</button>
            </div>
        </div>
    );
}

export default LandingPage;
