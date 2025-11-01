import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOData } from './SEOConfig';

interface SEOProps {
  data: SEOData;
}

const SEO: React.FC<SEOProps> = ({ data }) => {
  const {
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    canonical,
    noindex = false,
  } = data;

  const defaultOgImage = 'https://cynerza.com/og-image.png';
  const defaultTwitterImage = 'https://cynerza.com/twitter-image.png';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Robots Meta Tag */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta property="og:image:secure_url" content={ogImage || defaultOgImage} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content={ogTitle || title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:site_name" content="CYNERZA" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage || defaultTwitterImage} />
      <meta name="twitter:image:alt" content={ogTitle || title} />
      {canonical && <meta name="twitter:url" content={canonical} />}
      <meta name="twitter:site" content="@cynerza" />
      <meta name="twitter:creator" content="@cynerza" />

      {/* Additional Meta Tags */}
      <meta name="author" content="CYNERZA" />
      <meta name="language" content="English" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};

export default SEO;
