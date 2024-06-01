import '../assets/css/contacts.css'
import List from '../components/skillsList';
import { useEffect, useState } from 'react';
import CoverLink from '../components/coverLink';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    setFormState({
      name: '',
      email: '',
      message: ''
    });
    
  }

  const onChange = (e)=>{
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });

    
  }



  return (
    <div className={`h-full container-fluid`}>
      <h1 className={`projects-header p-2`}>Contact Page</h1>

      <div className={`row justify-content-around mt-5`}>

        {/* list of methods of contact */}
        <div className={`contact-list-wrapper col-6 row b-r justify-content-start`}>
          <h2 className={`contacts-header col-12`}> Contacts </h2>
          <div className={`contact-list col-12 row flex-column justify-content-start align-items-center g-0 `}>
            <List content={`Github`} cardStyle={'contact col-10'}> 
            <CoverLink link={'https://github.com/WillRMorris/'}></CoverLink>
            </List>
            <List content={`Linkedin`} cardStyle={'contact col-10'}>
              <CoverLink link= {'https://www.linkedin.com/in/william-morris-b388382a4'}></CoverLink>
            </List>
            <List content={`williammorris1473@gmail.com`} cardStyle={'contact col-10'}></List>


          </div>
        </div>

        {/* form for adding contacts */}
        <div className={`contact-form-wrapper col-6 row b-l`}>
          <h2 className={`contacts-header col-12`}> Or Leave a Message (work in progress)</h2>
          <form onSubmit={formSubmit} name = "contact-form" className={`contact-form row`}>
              <div className={`form-group`}>
              <label htmlFor="name" className={`m-1 mt-2`}>Name:  </label>
              <input type="text" 
              name='name' 
              placeholder='Your Name Here' 
              className={`form-control`}
              onChange={onChange}
              value={formState.name}
              />
              </div>
            <div className={`form-group`}>
              <label htmlFor="email" className={`m-1 mt-2`}>Email:  </label>
            <input type="email" 
            placeholder='someone@example.com'  
            name='email' 
            className={`form-control`}
            onChange={onChange}
            value={formState.email}
            />
            </div>
            <div className={`form-group`}>
              <label htmlFor="message"></label>
              <textarea name="message" 
              className={`form-control`} 
              placeholder='message' rows={10} 
              value = {formState.message}
              onChange={onChange}
              >


              </textarea>
              </div>
              <div className={`form-group`}>
                <input type="submit" value={`Submit`} className={`btn btn-primary m-2`} ></input>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}
