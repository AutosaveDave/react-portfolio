import React from 'react';
import PageContent from '../PageContent';
import AboutMe from '../../pages/AboutMe';
import Portfolio from '../../pages/Portfolio';
import Contact  from '../../pages/Contact';
import Resume from '../../pages/Resume';


function Page( { currentPage } ) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "About Me": return <AboutMe />;
      case "Portfolio": return <Portfolio />;
      case "Contact": return <Contact />;
      case "Resume": return <Resume />;
      default: return <AboutMe />;
    }
  };
  return (
    <section>
      <div style={{ height:'88px' }} />
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;
