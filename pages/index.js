import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from 'components/layout';
import Banner from 'components/common/banner';
import LotteryList from 'components/common/lottery-list';
import ExLotteryList from 'components/common/exlottery-list';
import ProductList from 'components/common/product-list';
import CartPopup from 'components/home/cart-popup';
import PlayGroup from 'components/home/play-group';
import LottoResult from 'components/home/lotto-result';
import Royalty from 'components/home/loyalty';
import News from 'components/home/news';
import { parseJsonFile } from 'helpers/json';


export default function Home(props) {

	const { banners, lotteries, exlottos, products, results } = props;
	return (
		<Layout>
			<Head><title>Bitcoin Lottery - Lottery with Bitcoins</title></Head>
			<main id="main" className="clearfix">
				{/* banner */}
				<Banner banners={banners} />
				<div className="clear" />

				{/* lottery list */}
				<section className="sliderwrap lotto-owl-slider">
					<LotteryList items={lotteries} />
				</section>

				{/* desktop content */}
				<Link href="/lottery">
					<a href="/lottery" className="view-all-lotts right">View all lotteries &gt; </a>
				</Link>
				<div className="clear" />

				{/* exclusive lotteries */}
				<section className="wrap">
					<div className="wrap">
						<ExLotteryList items={exlottos} />
					</div>
				</section>
				<div className="clear">&nbsp;</div>

				{/* middle home */}
				<section id="middle_home">
					<div className="wrap">
						<section id="middle_about">
							<ProductList products={products} />
						</section>
						<section className="cart-popup">
							<CartPopup />
						</section>
						<section className="wrap">
							<div className="playgroup-result">
								<PlayGroup />
								<LottoResult items={results} />
							</div>
						</section>
					</div>
					<div id="middle_sec" style={{ cursor: 'pointer' }}>
						<div className="bannersignup" />
					</div>
					<section className="loyalty">
						<Royalty />
					</section>
					<section id="middle_about" className="wrap news-section-new" >
						<News />
					</section>
				</section>
			</main>
		</Layout>
	)
}

export const getStaticProps = async (ctx) => {

	const banners = await parseJsonFile('data/banners.json');
	const lotteries = await parseJsonFile('data/lotteries.json');
	const products = await parseJsonFile('data/products.json');
	const results = await parseJsonFile('data/results.json');
	return {
		props: {
			banners: banners.items,
			lotteries: lotteries.lotteries,
			exlottos: lotteries.exlottos,
			products: products.items,
			results: results.items
		}
	}
}