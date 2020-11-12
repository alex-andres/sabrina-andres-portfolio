import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './article-preview.module.css'

export default ({ article }) => (
  <div className={styles.preview}>
    <Img alt="" fluid={article.heroImage.fluid} />
    <h3 className={styles.previewTitle}>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{article.publishDate}</small>
    <p>
      {documentToReactComponents(article.description.raw)}
    </p>

  </div>
)