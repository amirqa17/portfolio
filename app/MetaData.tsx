// components/Metadata.tsx

import Head from 'next/head';

interface MetadataProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Metadata: React.FC<MetadataProps> = ({ title, description, imageUrl }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      {/* Add more meta tags as needed */}
    </Head>
  );
};

export default Metadata;
