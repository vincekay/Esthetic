import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { addPic } from '../actions';
import { Link } from 'react-router-dom';
import '../css/Results.css';

const ResultsPage = (props) => {

    const onSubmit = el => {
        props.addPic(el)
    }

    return ( 
        <div>
            <div className="resultsNavContainer">
                <div>
                    <span>
                        <Link className="NavItemResults" to="/main">Home</Link>
                        <Link className="NavItemResults" to="/users/collection">Collections</Link>
                    </span>
                </div>
            </div>
        <h1 className="collectionsTitle">Results</h1>
        <div className="card">
            <Navbar type="results" />
            <div className="resultsGallery">
            {props.picBank.map(el => 
                <div>
                    <div className="ButtonContainer">
                        <button type="button" className="CollectButton" onClick={() => onSubmit(el)}>+ Collect</button>
                    </div>
                    <div className="collections-grid-item">
                        <img src={`${el.webformatURL}`} alt=""/>
                    </div>
                </div>
                )}
            </div>
        </div>
        </div>
     );
}
 
const mapStateToProps = state => ({
    picBank: state.picBankSearch
})

const mapPropsToDispatch = dispatch => ({
    addPic: (el) => dispatch(addPic(el))
})

export default connect(mapStateToProps, mapPropsToDispatch)(ResultsPage);