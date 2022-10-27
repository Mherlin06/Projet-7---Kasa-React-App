import React from "react";
import Tag from "../components/Tag";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";
import HostCard from "../components/HostCard";
import Dropdown from "../components/Dropdown";
import Equipments from "../components/Equipments";
import "../styles/Accomodation.css";
import { useParams } from "react-router-dom";
import { accomodationData } from "../data/accomodationData";

const Accomodation = () => {
  const {accomodationID} = useParams();
  
  return (
    <main>
      <Carousel />
      <section className="accomodation-infos">
        <div className="title-card">
          <h1>Titre</h1>
          <h2>lieux</h2>
          <ul className="tags">
            <Tag />
            <Tag />
          </ul>
        </div>
        <div className="host-rating">
          <Rating rate={4} />
          <HostCard hostName="Pierre Durand" />
        </div>
      </section>
      <section className="accomodation-dropdown-section">
        <Dropdown
          label="Description"
          description="lorem15"
          classes="dropdown accomodation-dropdown"
        />
        <Equipments classes="dropdown accomodation-dropdown" />
      </section>
    </main>
  );
};
export default Accomodation;
