import ExpenseDate from './ExpenseDate';
import './ExpenseModule.css';

// destructor the incoming props paramter here to make the values more clear
// destructered value names Must match what they are being passed in as
function ExpenseModule({date, title, amount}) {
  return (
    <div className='expense-item'>
      <ExpenseDate expenseDate={date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{amount}</div>
      </div>
    </div>
  );
}

export default ExpenseModule;
