 import './ExpenseItem.css';

function ExpenseItem(props){
   const day=props.expD.toLocaleString('en-US',{day:'2-digit'});
   const month=props.expD.toLocaleString('en-US',{month:'long'});
   const year=props.expD.getFullYear();
     
    return (
        <div className="expense-item">
             <div>{day}  </div>
             <div> {month} </div>
             <div> {year} </div>

             <div className="expense-item__description"> 
               
                <h2> { props.expT}</h2>
                <div className="expense-item__price"> {props.expA}</div>
              </div>
               
          </div>
    );
}
export default ExpenseItem;