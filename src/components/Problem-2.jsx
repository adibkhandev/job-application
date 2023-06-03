import React,{useState,useEffect} from 'react';
import axios from 'axios'
import { Modal, Button } from 'react-bootstrap'

const Problem2 = () => {
    let[contacts,setContacts] = useState([])
    let[usContacts,setUsContacts] = useState([])
    let[modalState,setModalState]=useState(null)
    let [even,setEven] = useState(false)
    useEffect(() => {
        axios.get('https://contact.mediusware.com/api/contacts/')
        .then((response)=> {
            console.log(response.data.results)
            setContacts(response.data.results)
        })
        .catch((err)=> {
            console.log(err)
        })

        axios.get('https://contact.mediusware.com/api/country-contacts/United States/')
        .then((response)=> {
            console.log(response.data.results,'US')
             setUsContacts(response.data.results)
        })
        .catch((err)=> {
            console.log(err)
        })


    }, [])
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <button onClick={()=>setModalState('contacts')} className="button-1 btn btn-lg btn-outline-primary" type="button" >All Contacts</button>
                <button onClick={()=>setModalState('Us-contacts')} className="button-2 btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                {
                    modalState?(
                        <>
                        <button onClick={()=>setModalState(null)} className="button-3 btn btn-lg btn-outline-warning" type="button" >Close</button>
                        <div className="check">
                          <input onClick={()=>setEven(!even)} type="checkbox" placeholder="even"/>
                          <label htmlFor="">Even</label>
                        </div>
                        </>

                    ):''
                }
                    
                </div>
                
            </div>
            {modalState?<ModalComp even={even} data={modalState=='contacts'?contacts:usContacts} ></ModalComp>:''}
            
        </div>
    );
};


let ModalComp = ({data,even}) => {
    
    return (
     <div class="modal-body">
       <h1 className="modal-header">
         All contacts
       </h1>
       <div className="data-cont">
          {
            data?(
                data.map((obj)=>{
                    if(!even){
                        return(
                            <div className="cont">
                              <h5>{obj.country.name}</h5>  
                              <p>{obj.phone}</p>
                            </div>
                        )

                    }
                    else{
                        if(obj.id % 2==0){
                          return(
                            <div className="cont">
                              <h5>{obj.country.name}</h5>  
                              <p>{obj.phone}</p>
                            </div>
                          )  
                        }
                    }
                })
            ):''
          }
           
       </div>
     </div>
    )
}
export default Problem2;