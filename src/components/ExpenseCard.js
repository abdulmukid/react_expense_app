//the term card typically means you are giving a container like look to your child components
import "./ExpenseCard.css";

function ExpenseCard(props) {
  //we have to define what stylings our custom component can take for them to have an effect
  //props.classname makes sure that anything we recieve as a classname is added to the styling
  const cardStyling = "expense-card " + props.className;
  //children is a reserved keyword which value is the content of opening and closing tags of your custom component
  return <div className={cardStyling}>{props.children}</div>;
}

export default ExpenseCard;
