import BannerItem from 'components/common/banner-item';

const Banner = ({banners}) => {
    return (
        <section id="owl-home-banner" className="owl-carousel owl-theme">
            {banners && banners.map((item, idx) => (
                <BannerItem {...item} key={idx} />
            ))}
        </section>
    )
}

export default Banner;