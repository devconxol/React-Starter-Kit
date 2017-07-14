import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';


export default ({ComposedComponent = null, title='', meta=[], link=[]} = {}) => {
    class Page extends Component {
        componentWillMount(){
            console.log('LoadApp....')
        }
        render(){
            console.log('page title', title );
            return (
                <div>
                    <Helmet title={title} meta={meta} link={link} />
                    <ComposedComponent {...this.props} />
                </div>
            )
        }
    }
    return Page;
}



/*
 <Helmet title={} link={} meta={} />
Page.propTypes = {
    title: PropTypes.string,
    link: PropTypes.array,
    meta: PropTypes.array
};
*/

//export default Page;
