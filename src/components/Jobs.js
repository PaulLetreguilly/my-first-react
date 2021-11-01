import Job from "./Job";

const Jobs = () => {
  return (
    <div className="container">
      <Job
        name="Full Time Sales Associate - Sydney Boutique"
        borderColor="red"
        contract="CDI"
        country="Australie"
        city="Sydney"
      />
      <Job
        name="Agent de sécurité - Pantin"
        borderColor="green"
        contract="CDI"
        country="France"
        city="Pantin"
      />
      <Job
        name="Responsable d'Atelier (H/F)"
        borderColor="yellow"
        contract="CDD"
        country="France"
        city="Pantin"
      />
      <Job
        name="Chef de Projets"
        borderColor="blue"
        contract="CDD"
        country="France"
        city="Pantin"
      />
      <Job
        name="Développeur React.js"
        borderColor="pink"
        contract="CDI"
        country="France"
        city="Pantin"
      />
      <Job
        name="Sale Associate Stockholm"
        borderColor="red"
        contract="CDI"
        country="Suède"
        city="Stockholm"
      />
      <Job
        name="Vendeur/se - Crans Montana"
        borderColor="green"
        contract="CDI"
        country="Suisse"
        city="Crans-Montana"
      />
      <Job
        name="CRM & Data Quality Analyst"
        borderColor="yellow"
        contract="CDI"
        country="USA"
        city="New York"
      />
      <Job
        name="Infirmier (H/F)"
        borderColor="blue"
        contract="CDI"
        country="France"
        city="Pantin"
      />
    </div>
  );
};
export default Jobs;
