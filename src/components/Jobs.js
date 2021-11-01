import Job from "./Job";

const Jobs = () => {
  return (
    <div className="container">
      <Job
        name="Full Time Sales Associate - Sydney Boutique"
        borderColor="red"
        text="CDI - Australie - Sydney"
      />
      <Job
        name="Agent de sécurité - Pantin"
        borderColor="green"
        text="CDI - France - Pantin"
      />
      <Job
        name="Responsable d'Atelier (H/F)"
        borderColor="yellow"
        text="CDD - France - Pantin"
      />
      <Job
        name="Chef de Projets"
        borderColor="blue"
        text="CDD - France - Paris"
      />
      <Job
        name="Développeur React.js"
        borderColor="pink"
        text="CDI - France - Paris"
      />
      <Job
        name="Sale Associate Stockholm"
        borderColor="red"
        text="CDI - Suède - Stockholm"
      />
      <Job
        name="Vendeur/se - Crans Montana"
        borderColor="green"
        text="CDI - Suisse - Crans-Montana"
      />
      <Job
        name="CRM & Data Quality Analyst"
        borderColor="yellow"
        text="CDI - USA - New York"
      />
      <Job
        name="Infirmier (H/F)"
        borderColor="blue"
        text="CDI - France - Pantin"
      />
    </div>
  );
};
export default Jobs;
