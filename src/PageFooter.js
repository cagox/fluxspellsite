import React from 'react'



class PageFooter extends React.Component {


    render() {

        return(
            <div className="footer-grid">
                <a href="https://golang.org/" target="_new">
                    <div className="footer-item">Created with Go</div>
                </a>
                <a href="http://reactjs.org/" target="_new">
                    <div className="footer-item">Created with React</div>
                </a>
                <div className="footer-item">Create By Cagox Media</div>
                <a href="http://github.com/cagox/fluxspellsite/" target="_new">
                    <div className="footer-item">Source on Github</div>
                </a>
                <div className="footer-item">Admin Login</div>
            </div>
        );

    }

}

export default PageFooter;