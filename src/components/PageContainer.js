import React, {useState} from 'react';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
// import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';

function PageContainer (){
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage==="AboutMe"){
            return <AboutMe/>;
        } else if (currentPage==="Portfolio"){
            return <Portfolio/>;
        } else if (currentPage==="Contact"){
            return <Contact/>;
        } else if (currentPage==="Resume"){
            return <Resume/>;
        }
        };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            <Footer/>
        </div>
    );
}

export default PageContainer;