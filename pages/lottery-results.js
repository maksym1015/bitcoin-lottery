import React from 'react'
import Link from 'next/link';
import Layout from 'components/layout';

import { parseJsonFile } from 'helpers/json';

export default function LotteryResultsPage({results}) {
    return (
        <Layout>
            <main id="main" className="clearfix">
                <div className="wrap">
                    <div id="middle" className="innerbg lottery-result">
	    				<div className='innerpage'>
                            <div className="all-lot-res-title">
                                <h1>Latest Lottery Results</h1>
                            </div>
							<div className="allresult_table">
								<table id="myTable" className="tablesorter tablesorter-result" border="0" cellPadding="0" cellSpacing="1">
                                    <thead>
                                        <tr>
                                            <th className="header">Country</th>
                                            <th className="header">Lottery</th>
                                            <th className="header">Last draw</th>
                                            <th className="header">Payout</th>
                                            <th style={{backgroundImage:'none'}}>Winning Numbers</th>
                                        </tr>
                                    </thead>
									<tbody className="allresult">
                                        {results && results.map(item => (
                                            <React.Fragment key={item.id}>
                                                <tr>
                                                    <td><img src={item.flag??'/images/logo-icon.svg'} />&nbsp;&nbsp;{item.country}</td>
                                                    <td><a href={`/${item.name.toLowerCase()}-results`}>{item.name}</a></td>
                                                    <td>{item.date}</td>
                                                    <td>{item.earned.unit}&nbsp;{item.earned.amount}</td>
                                                    <td>
                                                        <div class="result_number">
                                                            <ul>
                                                                {item.scores && Array.isArray(item.scores) && item.scores.map((score, idx) => (
                                                                    <li 
                                                                        className={score.special ? `result_ellipse_${score.color} special` : `result_ellipse_${score.color}`}
                                                                        key={idx}>{score.value}
                                                                    </li>
                                                                ))}
                                                                {item.scores && typeof item.scores === 'number' && (
                                                                    <li>{item.scores}</li>
                                                                )}
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr class="spacer"></tr>
                                            </React.Fragment>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="clear_inner">&nbsp;</div>
                            <div className="results-page">
                                <h1>Real-Time Results !</h1>
                                <p>
                                    Bitcoin.com provides players with a variety of lotteries from the US, Canada and Europe.
                                </p>
                                <p>With Bitcoin.com, your lottery results online are just a click away, at any time and any place. As long as you have internet access alongside a computing device, checking lottery results is now as easy as one click of your mouse.</p>
                                <h1></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export const getStaticProps = async (ctx) => {

	const results = await parseJsonFile('data/results.json');
	return {
		props:{
			results: results.items,
		}
	}
}