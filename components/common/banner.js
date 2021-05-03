import BannerItem from 'components/common/banner_item';

const Banner = ({banners}) => {
    return (
        <>
            <div id="owl-home-banner" className="owl-carousel owl-theme">
                {banners.map((item, idx) => (
                   <BannerItem {...item} key={idx} />
                ))}
            </div>
            <div className="clear">
            </div>
        </>
    )
}

export default Banner;