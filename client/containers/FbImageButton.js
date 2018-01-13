import { connect } from 'react-redux';
import _FbImageButton from 'components/FbImageButton';
import { operations as uOperations } from 'modules/user';

const { getPFP } = uOperations;

const mapStateToProps = (state, ownProps) => ({
    
})

const mapDispatchToProps = {
    getPFP
}

const FbImageButton = connect(mapStateToProps, mapDispatchToProps)(_FbImageButton);
export default FbImageButton;