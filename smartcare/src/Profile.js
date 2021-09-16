import './profile.css';
import pro_img from './images/profile.jpg'
import { useState } from 'react';
import { Button } from 'react-bootstrap'
import axios from 'axios'
function Profile() {
  const [update, setUpdate] = useState(true);

  return (
    <div className='profile'>
      <section className='title'>
        <h4>Profile</h4>
      </section>
      {
        update
          ? <Display update={update} setUpdate={setUpdate} />
          : <EditPage Pageupdate={update} setUpdate={setUpdate} />
      }

    </div>

  )
}

function Display({ update, setUpdate }) {
  return (
    <section className='card'>
      <article className='profile-img'>
        <img src={pro_img} className='profile-img' />
      </article>
      <article className='info'>
        <ul>
          <hr />
          <li><h5>Name:</h5>조항주</li><hr />
          <li><h5>Age:</h5>24</li><hr />
          <li><h5>Mobile:</h5>010-5021-0173</li><hr />
          <li><h5>Blood Type:</h5>AB</li><hr />
          <li><h5>Adrress:</h5>충남어쩌구저쩌구</li><hr />
          <li><h5>Disease:</h5>치매</li><hr />
        </ul>
        <Button className='btn' onClick={() => { setUpdate(!update) }} variant="outline-success">Edit</Button>{' '}
      </article>
    </section>
  )
}
function EditPage({ update, setUpdate }) {
  return (
    <section className='card'>
      <article className='profile-img'>
        <img src={pro_img} className='profile-img' />
      </article>
      <article className='info'>
        <ul>
          <hr />
          <li><h5>Name:</h5><input></input></li><hr />
          <li><h5>Age:</h5><input></input></li><hr />
          <li><h5>Mobile:</h5><input></input></li><hr />
          <li><h5>Blood Type:</h5><input></input></li><hr />
          <li><h5>Adrress:</h5><input></input></li><hr />
          <li><h5>Disease:</h5><input></input></li><hr />
        </ul>
        <Button className='btn' onClick={() => { setUpdate(!update) }} variant="outline-primary">Update</Button>{' '}
      </article>
    </section>
  )
}
export default Profile;
