import React from 'react';
import { connect } from 'react-redux';
import { deletePic } from '../actions';
import { Link } from 'react-router-dom';
import '../css/Collection.css';

const UserCollection = (props) => {

    return (
        <div className="col-md-3">
            <div className="userNavContainer">
                <div>
                    <span>
                        <Link className="NavItemUser" to="/main">Home</Link>
                    </span>
                </div>
            </div>
            <h1 className="collectionsTitle">Collections</h1>
            <div className="card">
                <div className="collectionsGallery">
            {props.collection.map((el, idx) => (
                el &&
                    <div key={el.id}>
                        <div className="ButtonContainer">
                            <button type="button" className="deleteButton" onClick={() => props.deletePic(idx)}>Remove</button>
                        </div>
                        <div className="collections-grid-item">
                            <img src={el.webformatURL} alt="" />
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )

};

const mapStateToProps = (state) => ({
    collection: state.userCollection,
    idx: state.idx
})

const mapPropsToDispatch = {
    deletePic
}

export default connect(mapStateToProps, mapPropsToDispatch)(UserCollection);