import Link from 'next/link';

const LotteryItem = (props) => {
    const {
        id, name, date, image, amount, link
    } = props;
    return (
        <div className={`slide ${name} track2`} data-track-name="slideWM" data-date={date} data-number={`${id}`}>
            <div className="flexRow">
                <div className="lotteryImg">
                    <img src={image} />
                </div>
                <div className="jackpot">
                    <div className="jackpotAmount">{amount}</div>
                </div>
            </div>
            <div className="flexRow">
                <div className={`countdown caro_clock_${id}`} />
                <Link href={`/${link}`}><a className="playNowBtn">Play Now</a></Link>        
            </div>
        </div>
    )
}

export default LotteryItem;