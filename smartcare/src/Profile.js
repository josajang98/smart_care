import './profile.css';
import pro_img from './images/profile.jpg'
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap'
import axios from 'axios';

function Profile() {
  const [update, setUpdate] = useState(true);
  const [profileData, setData] = useState('');
  const [inputData, setInputData] = useState('');

  useEffect(() => {
    axios.get('/profile').then((res) => {
      setData(res.data[0]);
    }).catch((Error) => {
      console.log(Error);
    })
  }, [profileData])

  return (
    <div className='profile'>
      <section className='title'>
        <h4>Profile</h4>
      </section>
      {
        update
          ? <Display update={update} setUpdate={setUpdate} data={profileData} />
          : <EditPage Pageupdate={update} setUpdate={setUpdate} />
      }

    </div>

  )
}

function Display({ update, setUpdate, data }) {
  return (
    <section className='card'>
      <article className='profile-img'>
        <img src={pro_img} className='profile-img' />
      </article>
      <article className='info'>
        <ul>
          <hr />
          <li><h5>Name:</h5>{data.name}</li><hr />
          <li><h5>Age:</h5>{data.age}</li><hr />
          <li><h5>Mobile:</h5>{data.mobile}</li><hr />
          <li><h5>Blood Type:</h5>{data.blood}</li><hr />
          <li><h5>Adrress:</h5>{data.address}</li><hr />
          <li><h5>Disease:</h5>{data.disease}</li><hr />
        </ul>
        <Button className='btn' onClick={() => { setUpdate(!update) }} variant="outline-success">Edit</Button>{' '}
      </article>
    </section>
  )
}
function EditPage({ update, setUpdate }) {
  const [data, setData] = useState({
    name: '',
    age: '',
    mobile: '',
    blood: '',
    address: '',
    disease: ''
  });

  const submitHandler = (e) => {

    e.preventDefault();
    setUpdate(!update)
    axios.put('/profile', data)
      .then((res) => { console.log(res) });
  };
  return (
    <section className='card'>
      <article className='profile-img'>
        <img src={pro_img} className='profile-img' />
      </article>
      <article className='info'>
        <form onSubmit={submitHandler}>
          <ul>
            <hr />
            <li><h5>Name:</h5><input onChange={(e) => { const copy = { ...data }; copy.name = e.target.value; setData(copy) }} /></li><hr />
            <li><h5>Age:</h5><input onChange={(e) => { const copy = { ...data }; copy.age = e.target.value; setData(copy) }} /></li><hr />
            <li><h5>Mobile:</h5><input onChange={(e) => { const copy = { ...data }; copy.mobile = e.target.value; setData(copy) }} /></li><hr />
            <li><h5>Blood Type:</h5><input onChange={(e) => { const copy = { ...data }; copy.blood = e.target.value; setData(copy) }} /></li><hr />
            <li><h5>Adrress:</h5><input onChange={(e) => { const copy = { ...data }; copy.address = e.target.value; setData(copy) }} /></li><hr />
            <li><h5>Disease:</h5><input onChange={(e) => { const copy = { ...data }; copy.disease = e.target.value; setData(copy) }} /></li><hr />
          </ul>
          <Button className='btn' type='submit' variant="outline-primary">Update</Button>
        </form>

      </article>
    </section>
  )
}
export default Profile;
