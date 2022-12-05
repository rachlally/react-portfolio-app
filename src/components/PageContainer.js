import React, {useState} from 'react';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';
import Navigation from './Navigation';
import Header from './Header';
import '../styles/Pages.css'


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
            <Header/>        
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            <div className="pageContainer">{renderPage()}</div>
            <Footer/>
        </div>
    );
}

export default PageContainer;