import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faTimes,
  faUser,
  faCartShopping,
  faHeart,
  faHeadphones,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
import { useState, useEffect } from "react";

export default function Header() {
  const [tabs, setTabs] = useState([]);
  useEffect(() => {
    async function getTabs() {
      const authAxios = axios.create({
        baseUrl: "https://unofficial-shein.p.rapidapi.com/",
        params: {
          language: "en",
          country: "US",
          currency: "USD",
        },
        headers: {
          "X-RapidAPI-Key":
            "19f77fcb11mshf5a8a40ee6c7abep19e5fbjsn96c9ef0c4b3b",
          "X-RapidAPI-Host": "unofficial-shein.p.rapidapi.com",
        },
      });
      try {
        const response = await authAxios.get(
          "https://unofficial-shein.p.rapidapi.com/navigations/get-root"
        );
        const result = response.data;
        console.log(response.data);
        setTabs(response.data);
        return result;
      } catch (err) {
        console.log(err);
      }
    }

    getTabs();
  }, []);

  const [open, setOpen] = useState(false);

  console.log(open);
  const openCategory = () => {
    setOpen(true);
    
  };

  return (
    <>
      <div className="header">
        <div className="header_inner">
          <header className="top_header">
            <div className="logo">
              <a href="/">
                <h1>SHEIN</h1>
              </a>
            </div>
            <div className="search">
              <div className="search_inner">
                <div className="input">
                  <input type="text" placeholder="Dress" />
                  <FontAwesomeIcon className="iconx" icon={faTimes} />
                </div>
                <div className="search_icon">
                  <FontAwesomeIcon icon={faSearch} />
                </div>
              </div>
            </div>
            <div className="header_right">
              <ul>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faUser} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faCartShopping} />
                  </a>
                  0
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faHeart} />
                  </a>
                  0
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faHeadphones} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faGlobe} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="contacts"></div>
          </header>
          <nav className="category_panel">
            <div className="first_category">
              <ul>
                <li>Categories</li>
                <div className="main_cate">
                  {tabs?.info?.content?.map((item) => (
                    <li onMouseEnter={() => openCategory()}>{item.name}</li>
                  ))}
                </div>
              </ul>
            </div>
            {open ? (
              <div className="second_category">
                <ul>
                  {tabs?.info?.content?.map((item) => (
                    <li>{item.name}</li>
                  ))}
                </ul>
                {tabs?.info?.content?.map((item) => (
                  <div className="shops_by">
                    {item?.child?.map((elem)=>(
                      <>
                      <p>{elem?.name}</p>
                      {elem?.thumb?.map((elem_thumb)=>(
                        <>
                        <img src={elem_thumb?.target} alt="" />
                        </>
                      ))}
                      </>
                    ))}
                  </div>
                ))}
                <div className="inner_category">{}</div>
              </div>
            ) : (
              <></>
            )}
          </nav>
        </div>
      </div>
    </>
  );
}
