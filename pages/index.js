import Head from 'next/head';
import Image from 'next/image';
import sampleLogo from '../assets/sample-logo.png';

const Home = () => {
  return (
    <div className="root">
      <Head>
        <title>GPT-3 Starter</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>sup, insert your headline here</h1>
          </div>
          <div className="header-subtitle">
            <h2>insert your subtitle here</h2>
          </div>
        </div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://en.wikipedia.org/wiki/GPT-3"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={sampleLogo} alt="sample-logo" />
            <p>Build with GPT-3</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
