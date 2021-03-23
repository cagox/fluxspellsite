import React from 'react';

class PageTitle extends React.Component {

    render() {
        return(
            <div className="row page_header">
                <div className="twelve columns">
                    <center>{this.props.text}</center>
                </div>
            </div>
        );
    }
}

export default PageTitle;