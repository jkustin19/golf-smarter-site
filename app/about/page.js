import styles from './about.module.css';

export const metadata = {
  title: 'About Golf Smarter',
  description: 'Learn about Golf Smarter and our mission to help weekend golfers play better.',
};

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>About Golf Smarter</h1>

        <section>
          <h2>Our Mission</h2>
          <p>
            Golf Smarter exists to help weekend golfers play better without spending more. We believe that
            improvement comes from smart practice, honest equipment choices, and understanding the
            fundamentals—not from premium gear or expensive lessons.
          </p>

          <p>
            Our readers are working professionals who love golf but don't have time to obsess over it. They
            want real tips that work, honest reviews that aren't influenced by sponsorships, and straightforward
            advice without the gatekeeping that often surrounds golf.
          </p>
        </section>

        <section>
          <h2>What We Do</h2>
          <p>
            We publish practical, well-researched articles about:
          </p>
          <ul>
            <li>Golf technique and fundamentals for improving your game</li>
            <li>Honest equipment reviews focused on value, not hype</li>
            <li>Budget-friendly ways to practice and improve</li>
            <li>Tips for weekend golfers who want to shoot lower scores</li>
          </ul>

          <p>
            Every article is written with real golfers in mind—people who play for fun and want to get better,
            not tour professionals chasing tenths of a shot.
          </p>
        </section>

        <section>
          <h2>Affiliate Disclosure</h2>
          <p>
            Golf Smarter is an affiliate website. We recommend products we genuinely believe in, and when you
            purchase through our links, we earn a small commission at no extra cost to you. This commission
            helps us continue writing and doesn't influence our recommendations.
          </p>

          <p>
            We're transparent about what we recommend and why. If we wouldn't use it ourselves, we won't
            recommend it to you—regardless of commission.
          </p>
        </section>

        <section>
          <h2>Why We Started</h2>
          <p>
            Golf can feel intimidating and expensive, especially when you're learning. Too much golf content is
            written for elite players or influenced by sponsorships. We wanted to create a resource that's
            honest, practical, and actually useful for people who just want to play better golf on the weekend.
          </p>

          <p>
            If you have questions, feedback, or article ideas, we'd love to hear from you. Golf Smarter is for
            golfers, by golfers.
          </p>
        </section>
      </div>
    </div>
  );
}
