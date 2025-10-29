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
    canonical,
    noindex = false,
  } = data;

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
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:site_name" content="CYNERZA" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
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
