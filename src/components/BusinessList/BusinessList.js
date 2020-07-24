import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business'

class BusinessList extends React.Component {
    render() {
    
        const BusinessArray = this.props.state.businesses
        if (BusinessArray===undefined) {
            

            return(<div class='center '><h1 class='error'><i class="fas fa-sad-cry"></i>Businness does not exist in that Location</h1></div>)
         } 

             

              else {return (
                <div className='BusinessList'>
    
                  { BusinessArray.map(business => {
                    return <Business key ={ business.id} business ={business} />
                })}
                </div>)}
            
    }
}


export default BusinessList;

