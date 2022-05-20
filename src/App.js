import React from 'react';
import Image from './components/Image';
import Info from './components/Info';
import Insights from './components/Insights';
import Layout from './container/Layout';


function App() {
  return (
    <Layout>
      <div className="info__container">
        <Info />
        <Insights company={"10k+"} templates={"314"} queries={"12M+"} />
      </div>
      <Image />
    </Layout>
  );
}

export default App;
