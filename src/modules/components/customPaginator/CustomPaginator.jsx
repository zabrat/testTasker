import React from 'react';
import PropTypes from 'prop-types';
import { 
    Wrapper,
    PagesWrapper
 } from './styledCompomemts';

const CustomPaginator = props => {
    const {
        handlePage,
        pageQuantity
    } = props;

    const pagesList = Array.from(Array(pageQuantity+1).keys()).slice(1);

    return(
        <Wrapper>
            <PagesWrapper>
                {pagesList.map(page => (
                    <PagesWrapper.pageNumber
                        onClick={handlePage}
                        key={page}
                        id={page}
                        children={page}/>
                ))    
                }
            </PagesWrapper>
        </Wrapper>
    )
}

CustomPaginator.propTypes = {
    pageQuantity: PropTypes.number
}

CustomPaginator.defaultProps = {
    pageQuantity: 0,
}

export default React.memo(CustomPaginator);