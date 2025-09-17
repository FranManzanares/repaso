import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1>¡Bienvenido a la aplicación!</h1>
        <p>Por favor, inicia sesión o regístrate para continuar.</p>
        <div className={styles.ctas}>
          <a className={styles.primary} href="/login">
            Iniciar sesión
          </a>
          <a className={styles.secondary} href="/register">
            Registrarse
          </a>
          <a className={styles.tertiary} href="/main">
            Más información
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Ir a nextjs.org →
        </a>
      </footer>
    </div>
  );
}
