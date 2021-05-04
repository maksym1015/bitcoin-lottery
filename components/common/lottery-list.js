import LotteryItem from './lottery-item';

const LotteryList = ({items}) => {
    return (
        <div id="owl-demo" className="owl-carousel">
            {items && items.map(item => (
                <LotteryItem {...item} key={item.id} />
            ))}
        </div>
    )
}

export default LotteryList;