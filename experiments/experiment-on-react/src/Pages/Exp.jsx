import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./css/exp.css"

export default function Exp() {
  return (
    <div className="product-card">
      <img src={`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQIEBQcGA//EADkQAAIBAgIFCQYFBQEAAAAAAAABAgMRBAUGBzFRsRITITU2QVJxdBQiYXKDwSUyYoGSJjRkkaEj/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAEDAgT/xAAbEQEBAQADAQEAAAAAAAAAAAAAAQIRMTIhA//aAAwDAQACEQMRAD8A7KAgTCJAIaABiGQNDQkCAYxDAAQAAwAABEiKJAMAA6AAABUuCAAGMSGQCGIaAkjxOtXN8wyjJ8JPLMXUwtSpXalKna7Sjs6Ue2RzrXU7ZPl272iV/wCJKOf0tLdIpv3s7xz+szXwWkmeSa5Wb4x+dVs8bh5xv+Zf7NzASXRaSsc/WGrXtcHpBm9k3mFeXzNPidQWxeRxzCW5KV1fu6Tsa6EvI6X8rfvJjEMNgiRFEihgAFAAABUAQAMaIjAkNERkDlJQi5Skoxirtt2SRyfWNpThM7w88qwtGnOhGX9zKN5X7+Ru8zc1qZ5LA4CjltCXJnibzqtbeQti/d8Picl5xuV2c2uda4V4ZJhm+mVT+RoYPKcPQVqUqqTd37wUWaFE55Y61V3L6bpYulWlUnWUHfmqrvCXwaOv5DnmHzej7qVOvFe9Svf91vRyTDmxl2KqYPE069F2nB3Xx+Bea5z+ll+usjPjha8cTh6VeH5akVJfA+p09RkkRJFDAAKGAABRAQBUgEgCJXHciNEHHdbVSUtJnF7I0IWPEQvc9trY7S/QgeJhtM6z0uUDQoMzqJo4cMdNPDs0aO1GZhzRo9DQZ103RZ3yPD37rr/pqmRor1HQ85cTXO49ufMMaZFDRVTAAKGgAAKACAKYCAIkNEUyRBx3Wz2l+hD7niY/mPb62O0n0Ifc8THaZ1npaoGjhzOoGhQDGtKgaNDpsZuH7jTodwZ10nRTqOh5y4muZGivUdDzlxNc6j2Z8wEiI0dOk1sGRQwGAICjPAQEUxkQTCJjREaYHIda/aNenh9zxEV0nuNbK/qKPp4/c8REzrPSzRNCiZ9Ev0Ax00aBpYczcOadBdKKzsdJ0V6koecuJrmPor1JR85cTXLHtz1ErgRGiqmiSZBEkUSASAozxAxEUw7xAgiYyKJIDkmtntFD08fueIie31sdoKfp48WeIjtM6z0sUTQobUUKReohlWjQew1MP3GTQew06EthWbpOivUlHzlxNe5i6KP8Eo/NLibNyvZnzEkNEEyRVSRJMgiRRNMQrgUZ4riuK5FSAjcLgfREkfNMkmQcn1sdoKfp48WeJie21rdf0/Tx4s8TE4rLSxSLtLaUqZcpMMqv0XsNHD7UZdJ7DSw72BnXS9FH+CUfmlxNgxtEunJKPzS4mxc6ezPRolchclcKmiSIJjuBMBICjI5xb0J1FvRD2VeKQnhV4pFVPnFvQ+cW9Hy9lXikNYX9UgPsqi3omqi3o+Cwy8UhrDfqkEcx1py5Wf03/jx4s8XE9jrPhzee01e//hH7njltM6y0sUy3SZTplukGdXaT2Ghh30ozafcX8M+lBlXS9E5pZJSV1+aXE2eWt6MDRWk55NTkpNe9Lia/s8vGzrh7c9LHLW9DU1vRW9nl42NUJeNldLSmt6Jctb0VVQl42S5iXjYFlVFvQFbmZeNgBAQAdIAAChjQAByfWr2gh6ePFnjExAZXtlp96ZbpbAAjOrdJl7DPvAAyrpmh3TkdJ/rlxNwANI9eeghpDAroWHYAAdgAAP/Z`} alt={"title"} />
      <div className="product-info">
        <h2>{"title"}</h2>
        <p>${"price"}</p>
        <p  className="saving">
          <span>{"saving"}%</span> saving
        </p>
        <p>Delivery by: {"deliveryBy"}</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};
