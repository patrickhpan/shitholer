import { connect } from 'react-redux';
import _Landing from 'components/Landing';
import { selectors as uSelectors, operations as uOperations } from 'modules/user';

const { hasFbImage, hasCustomImage, isLoaded } = uSelectors;
const { getPFP } = uOperations;

const mapStateToProps = (state, ownProps) => ({
    hasFbImage: hasFbImage(state),
    hasCustomImage: hasCustomImage(state),
    loaded: isLoaded(state)
})


const mapDispatchToProps = {
    getPFP
}

const Landing = connect(mapStateToProps, mapDispatchToProps)(_Landing);
export default Landing;