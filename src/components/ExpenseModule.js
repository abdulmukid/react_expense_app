import './ExpenseModule.css';

function ExpenseModule() {
  const expenseDate = new Date(2022, 2, 23);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 1000;


  return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseModule;
