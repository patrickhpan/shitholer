import { connect } from 'react-redux';
import _PFP from 'components/PFP';
import { selectors as uSelectors, operations as uOperations } from 'modules/user';

const { getCustomImage, getFbImage } = uSelectors;

const mapStateToProps = (state, ownProps) => ({
    image: ownProps.custom === true ?
        getCustomImage(state) :
        getFbImage(state)
}) 


const mapDispatchToProps = {
    
}

const PFP = connect(mapStateToProps, mapDispatchToProps)(_PFP);
export default PFP;