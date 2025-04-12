//Next Imports 
import Head from 'next/head';

//Custom Components
import Home from './Pages/Home/Home'


const page = () => {

  const homepageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "FakeStore E-commerce",
    "description": "Explore top-quality products at the FakeStore built using FakeStoreAPI.",
    "url": "https://appscrip-task-jayjoshi.netlify.app/",
    "publisher": {
      "@type": "Organization",
      "name": "FakeStore",
      "logo": {
        "@type": "ImageObject",
      }
    }
  };


  return (
    <div>
      <Head>
        <title>FakeStore - Home</title>
        <meta name="description" content="Explore top-quality products at FakeStore built using FakeStoreAPI." />
        <meta name="robots" content="index, follow" />

        {/* Schema - WebPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
        />
      </Head>

      <Home />
    </div >
  )
}

export default page
