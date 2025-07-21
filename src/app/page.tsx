import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className="flex flex-col items-center gap-4">
          <p className="text-gray-600 text-xl">헤더를 통해 Products 페이지로 이동할 수 있습니다.</p>
        </section>
      </main>
    </div>
  );
}
