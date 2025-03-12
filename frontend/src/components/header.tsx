import styles from './header.module.css'

const Header = () => {
    return (
        <header>
                <div className={styles.initials_container}>
                    <div id={styles.logo}></div>
                    <a href="">HOME</a>
                </div>
                <div className={styles.catalog}>
                    <a id='statistics' href="/statistics">Statistics</a>
                    <a id='sensors' href="/sensors">Sensors</a>
                    <a id='settings' href="/settings">Settings</a>
                </div>
        </header>
    )
}

export default Header