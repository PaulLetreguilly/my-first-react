const Job = (props) => {
  return (
    <div className={`item  ${props.borderColor}`}>
      <h2>{props.name}</h2>
      <div>
        <p>
          <span>{props.contract}</span> - <span>{props.country}</span> -{" "}
          <span>{props.city}</span>
        </p>
      </div>
    </div>
  );
};
export default Job;
