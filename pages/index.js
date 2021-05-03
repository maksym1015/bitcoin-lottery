import Head from 'next/head';
import Layout from 'components/layout';
import Banner from 'components/common/banner';
import path from 'path';
import fs from 'fs';

export default function Home(props) {
	const { banners } = props;
	return (
		<Layout>
			<Head>Bitcoin Lottery</Head>
			<main>
				<div id="main" className="clearfix">
					<Banner banners={banners} />
				</div>
			</main>
		</Layout>
	)
}

export const getStaticProps = async (ctx) => {

	const bannerPath = path.join(process.cwd(), 'data/banners.json');
	const contents = await fs.readFileSync(bannerPath);
	const banners = JSON.parse(contents);
	console.log(banners);
	return {
		props:{
			banners: banners.items
		}
	}
}