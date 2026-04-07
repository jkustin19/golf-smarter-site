import Image from 'next/image';
import Link from 'next/link';
import { articlesData } from '../articlesData';
import styles from './article.module.css';

export async function generateStaticParams() {
  return Object.keys(articlesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const article = articlesData[params.slug];
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }
  return {
    title: `${article.title} | Golf Smarter`,
    description: article.title,
  };
}

export default function Article({ params }) {
  const article = articlesData[params.slug];

  if (!article) {
    return (
      <div className={styles.container}>
        <h1>Article not found</h1>
        <p><Link href="/">Back to home</Link></p>
      </div>
    );
  }

  return (
    <article>
      <div className={styles.heroImage}>
        <Image
          src={article.image}
          alt={article.title}
          width={1200}
          height={600}
          unoptimized
          priority
        />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1>{article.title}</h1>

          <div className={styles.meta}>
            <p>By Golf Smarter | Updated April 2026</p>
          </div>

          <div
            className={styles.body}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className={styles.disclosure}>
            <p><strong>Disclosure:</strong> Golf Smarter earns a commission on purchases made through our links at no extra cost to you.</p>
          </div>

          <div className={styles.backLink}>
            <Link href="/#articles">← Back to all articles</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
