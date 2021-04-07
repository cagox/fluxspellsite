import React from 'react';

class PageTitle extends React.Component {

    render() {
        return(
            <div className="row page_header">
                <div className="twelve columns header_title">
                    <span>{this.props.text}</span>
                </div>
            </div>
        );
    }
}

export default PageTitle;
