import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPics, addPic } from '../actions';


const UsersList = (props) => {
  
  const onSubmit = el => {
    props.addPic(el)
  }
  
  useEffect(() => {
    props.fetchPics()
  },[]
  )

  return (
    <div className="card">
      <div className="gallery">
      {props.pictures.map(el => (
        <div>
          <div className="ButtonContainer">
            <button type="button" className="CollectButton" onClick={() => onSubmit(el)}>+ Collect</button>
          </div>
          <div>
            <Link to={`users/${el.id}`}>
              <img className="grid-item" src={el.webformatURL} alt=""/>
            </Link>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
      }

const mapStateToProps = (state) => ({
  pictures: state.picBank
})

const mapPropsToDispatch = dispatch => ({
  fetchPics: () => dispatch(fetchPics()),
  addPic: (el) => dispatch(addPic(el))
})

export default connect(mapStateToProps,mapPropsToDispatch)(UsersList)