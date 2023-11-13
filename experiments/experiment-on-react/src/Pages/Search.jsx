import React, { useEffect, useRef, useState } from "react";
import "./css/Search.css";
import axios from "axios";

export default function Search() {
  const [search, setSearch] = useState("");
  const [searchdata, setsearchdata] = useState([]);
  const [data, setdata] = useState([]);

  const timmerId = useRef(null);

  useEffect(() => {
    if (timmerId.current) {
      clearInterval(timmerId.current);
    }

    timmerId.current = setTimeout(() => {
      getData(search);
    }, 200);

    return () => clearInterval(timmerId.current);
  }, [search]);

  const getData = (search) => {
    if (search) {
      axios
        .get(`http://localhost:8000/users?q=${search}`)
        .then((res) => {
          setsearchdata(res.data.slice(0, 5));
        })
        .catch((err) => console.log(err));
    } else setsearchdata([]);
  };

  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      setdata(search)
    }
  };

  return (
    <>
      <div className="search-box">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => onKeyPress(e)}
          type="text"
        />
        <button>Search</button>
        <div className="search-bottom-box">
          {searchdata?.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                getData(item.name);
                setSearch(item.name);
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div>
        {data}
        {data}
        {data}
        {data}
        {data}
        {data}
      </div>
    </>
  );
}
