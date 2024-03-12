import styles from '../styles/navbar.module.css';
import Link from 'next/link';
import NavLink from './navlink';

export default function Navbar () {

    return (
        <div className={styles.navbar}>
            <div className={styles.links}>
                <NavLink name="My Sets" href="/my-sets" icon="/public/next.svg"/>
            </div>
        </div>
        
    )
}