import React, {useState,useEffect} from 'react';

const Problem1 = () => {

    const [show, setShow] = useState('all');
    const [data,setData] = useState([])
    const [name,setName] = useState(null)
    const [status,setStatus] = useState(null)
    const handleClick = (val) =>{
        setShow(val);
    }
    console.log(data)
    console.log(show)
    useEffect(() => {
        if(data.length>0){
            data.sort((a,b)=>{
                if(a.status=="Completed"){
                    return -1
                }
                else {
                    return 1
                }
                
              })
              data.sort((a,b)=>{
                if(a.status=="active"){
                    return -1
                }
                else {
                    return 1
                }
                
              })
        }
    }, [data])
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form
                      className="row gy-2 gx-3 align-items-center mb-4"
                      onSubmit={(e)=>{
                        e.preventDefault()
                        console.log(e.target.children[0].children[0].value)
                        console.log(e.target.children[1].children[0].value,'s')
                        if(data){
                            if(e.target.children[1].children[0] && e.target.children[0].children[0]){
                                setData(
                                    [
                                      ...data,
                                      {
                                        name:e.target.children[0].children[0].value,
                                        status:e.target.children[1].children[0].value,
                                      }
                                    ]

                                )

                            }
                          }}

                        }
                     >
                        <div className="col-auto">
                            <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="col-auto">
                            <input onChange={(e)=>setStatus(e.target.value)} type="text" className="form-control" placeholder="Status"/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                         {
                            data? (
                               data.map((obj)=> {
                                 if(show=='all'){
                                      return(
                                        <tr>
                                            <td>{obj.name}</td>
                                            <td>{obj.status}</td>
                                        </tr>

                                      )

                                 }

                                 if(show=='active'){
                                    if(obj.status=='active'){
                                        return(
                                          <tr>
                                            <td>{obj.name}</td>
                                            <td>{obj.status}</td>
                                          </tr>
                                        )

                                    }
                                 }
                                 if(show=='Completed'){
                                    if(obj.status=='Completed'){
                                        return(
                                          <tr>
                                            <td>{obj.name}</td>
                                            <td>{obj.status}</td>
                                          </tr>
                                        )

                                    }
                                 }
                               })
                            ):''
                         }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;