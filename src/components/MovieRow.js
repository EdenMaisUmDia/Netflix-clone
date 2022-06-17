import React, { useState } from "react";
import './MovieRow.css'


export default ({ title, items }) => {

    const [scrollX, setScrollX] = useState(0)


    const handlerLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setScrollX(x);
    }


    const handleRigthArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listw = items.results.length * 150;
        if ((window.innerWidth - listw) > x) {
          x = (window.innerWidth - listw) - 60;
        }
        setScrollX(x)

    }



    return (
        <div className="movieRow">


            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handlerLeftArrow}>
                <div className="seta--esquerda">&lt;</div>
            </div>
            <div className="movieRow--rigth" onClick={handleRigthArrow}>
                <div className="seta--direita">&gt;</div>
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>


            </div>
        </div>
    )
}