import { connect } from 'react-redux';
import _CustomImageButton from 'components/CustomImageButton';
import { operations as uOperations } from 'modules/user';

const { selectImage } = uOperations;

const mapStateToProps = (state, ownProps) => ({
    
})

const mapDispatchToProps = {
    selectImage
}

const CustomImageButton = connect(mapStateToProps, mapDispatchToProps)(_CustomImageButton);
export default CustomImageButton;