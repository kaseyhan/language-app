import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/navlink.module.css'

export interface NavLinkArgs {
    name: string,
    href: string,
    icon: string,
}

export default function NavLink ({name, href, icon}: NavLinkArgs ) {
  return (
    <div >
      <Link className={styles.container} href={href}>
        <Image src={icon} alt={name} width="48" height="48" />
        {name}
      </Link>
    </div>
  )
}