      import React from 'react'
// import TextForm from './TextForm';

      export default function Alertpage({alert}) {


       const capitalize =(word) =>{
         const lower =word.toLowerCase();
         return lower.charAt(0).toUpperCase() + lower.slice(1);
         }



        return (
             <>
                <div style={{height: '50px'}}>
                    { alert && <div role='alert' className={`alert alert-success alert-dismissible fade show alert `}>
                        " <strong> {capitalize(alert.type)} </strong> " {alert.message}   .                 
                        </div>}
                </div>   
                {/* <TextForm /> */}
            </>     
            )
          }
