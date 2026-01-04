import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Structured Learning Paths',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: 'Carefully organized lab-driven content that guides learners from fundamentals to real-world embedded, robotics, and IoT systems.',
  },
  {
    title: 'Open-Source by Design',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: 'All materials are openly shared for learning, remixing, and collaboration—built as a community-driven educational initiative.',
  },
  {
    title: 'Hands-On First',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: 'Every concept is backed by practical labs and experiments, helping learners build, test, and truly understand hardware systems.',
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className={styles.featureContent}>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <span className={styles.sectionLabel}>Why Bits2Bytes?</span>
          <Heading as="h2" className={styles.sectionTitle}>
            Built for Practical Learning
          </Heading>
        </div>
        <div className={styles.featuresGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
