import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

const articles = [
  {
    slug: 'best-beginner-golf-clubs',
    title: 'Best Golf Clubs for Beginners Under $300 (2026)',
    description: 'Complete guide to finding affordable, quality golf clubs that won\'t break the bank.',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=500&h=300&fit=crop',
  },
  {
    slug: 'best-golf-gps-watches',
    title: 'Best Golf GPS Watches Under $200 (2026)',
    description: 'Compare the top affordable GPS watches that help you play smarter on the course.',
    image: 'https://images.unsplash.com/photo-1592919505780-303950717480?w=500&h=300&fit=crop',
  },
  {
    slug: 'start-golf-on-budget',
    title: 'How to Start Playing Golf on a Budget',
    description: 'Everything you need to know about getting started in golf without spending a fortune.',
    image: 'https://images.unsplash.com/photo-1632931612668-118a59a40bfb?w=500&h=300&fit=crop',
  },
  {
    slug: 'best-budget-golf-balls',
    title: 'Best Budget Golf Balls That Actually Perform',
    description: 'Find quality golf balls at affordable prices that deliver real performance.',
    image: 'https://images.unsplash.com/photo-1514120237764-85e53aadbb4e?w=500&h=300&fit=crop',
  },
  {
    slug: 'taylormade-vs-callaway',
    title: 'TaylorMade vs Callaway for Beginners: Which Should You Buy?',
    description: 'Honest comparison of two major brands to help you choose the right gear.',
    image: 'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=500&h=300&fit=crop',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Image
          src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1200&h=600&fit=crop"
          alt="Golf course"
          width={1200}
          height={600}
          unoptimized
          priority
          className={styles.heroImage}
        />
        <div className={styles.heroContent}>
          <h1>Golf Smarter, Not Harder</h1>
          <p>Quick tips and honest gear reviews for the weekend golfer</p>
        </div>
      </section>

      {/* Articles Section */}
      <section className={styles.articlesSection} id="articles">
        <div className={styles.container}>
          <h2>Latest Articles</h2>
          <div className={styles.grid}>
            {articles.map((article) => (
              <Link href={`/articles/${article.slug}`} key={article.slug}>
                <article className={styles.card}>
                  <div className={styles.cardImage}>
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={500}
                      height={300}
                      unoptimized
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
