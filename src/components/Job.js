const Job = (props) => {
  return (
    <div className={`item  ${props.borderColor}`}>
      <h2>{props.name}</h2>
      <p>{props.text}</p>
    </div>
  );
};
export default Job;
