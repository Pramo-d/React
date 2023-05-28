 import './ExpenseItem.css';

function ExpenseItem(){
    const ExpenseDate=new Date(2023,4,28 );
    const ExpenseTittle='Car Insurance';
    const ExpensePrice= "$400";
    const ExpenseLocation='LocationOfExpenditure'
    return (
        <div className="expense-item">
             <div> {ExpenseDate.toISOString()}</div>
             <div className="expense-item__description"> 
               
                <h2> {ExpenseLocation}:  {ExpenseTittle}</h2>
                <div className="expense-item__price"> {ExpensePrice}</div>
              </div>
               

          </div>
    );
}
export default ExpenseItem;