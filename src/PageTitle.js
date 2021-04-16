import React from 'react';

class PageTitle extends React.Component {

    render() {
        return(
            <div className="header-grid">
                <div className="header">{this.props.text}</div>
            </div>
        );
    }
}

export default PageTitle;
