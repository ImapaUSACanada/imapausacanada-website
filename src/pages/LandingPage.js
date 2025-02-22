import styles from './LandingPage.module.css';


function LandingPage() {
    return (
        <div className={styles.landingContainer}>
            <div className={styles.backgroundImage}></div>
            <div className={styles.overlay}></div>

            <div className={styles.contentBox}>
                <h1 className={styles.title}>
                    IMAPA USA-Canada
                </h1>
                <p className={styles.subtitle}>
                    Ikatan Mahasiswa/i Papua di USA & Canda.
                </p>

            </div>
        </div>
    );
}

export default LandingPage;
