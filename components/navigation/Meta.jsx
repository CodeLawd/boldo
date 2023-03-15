import Head from "next/head";

const Meta = ({ title, keywords, description, image, article, url }) => {
  const metaTitle = `Boldo - ${title}`;

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords || "Save time by building  fast with Boldo Template "} />
      <meta
        name="description"
        content={
          description ||
          "Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure."
        }
      />
      <meta property="og:image" content={image || ""} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.svg" />
      <title>{metaTitle}</title>

      {article && (
        <>
          <meta property="og:type" content="article" />
          <meta property="og:title" content={title} />
          <meta property="og:image" content={image} />
          <meta property="og:description" content={description} />
          <meta property="og:url" content={url} />
          <meta property="og:site_name" content="Cybersweeft Solutions" />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
          <meta property="twitter:image" content={image} />
          <meta name="twitter:image:alt" content={title} />
          <meta property="facebook:title" content={title} />
          <meta property="facebook:description" content={description} />
          <meta property="facebook:image" content={image} />
        </>
      )}
    </Head>
  );
};

export default Meta;
