import React from 'react'

const LottoResultItem = (props) => {
    const { image, name, date, scores } = props;

    return (
        <li className="block result-exist" >
            <div className="result-list-info">
                <div className="lotto-title-block">
                    <div className="result-lottery-logo">
                        <img src={image} title="BTC Power Play" />
                    </div>
                    <div className="result-lottery-titledate">
                        <div className="hadding">
                            <div className="name">{name}</div>
                        </div>
                        <div className="datenum">{date}</div>
                    </div>
                </div>
            </div>
            <div className="result">
                <ul>
                    {scores && scores.map((item, idx) => (
                        <li 
                            className={item.special ? `ellipse_${item.color} special` : `ellipse_${item.color}`}
                            key={idx}>{item.value}
                        </li>
                    ))}
                </ul>
            </div>
        </li>
    )
}

export default LottoResultItem;
