import React from 'react'

const Royalty = ({items}) => {
    return (
        <>
            <h2>Our exclusive Loyalty Program</h2>
            <div class="loyalty_section">
                <div class="wrap loyalty_section_flex">
                    <div class="loyalty_col">
                        <div class="icon"><img src="images/icon_7.png" /></div>
                        <h1>Get Your Personal Manager</h1>
                        <div class="textwidget">As a VIP member you are entitled to Personal VIP service! You will be assigned with your own Personal Account Manager that will update you on winnings, results, special jackpot alerts etc.</div>
                    </div>
                    <div class="loyalty_col">
                        <div class="icon"><img src="images/icon_6.png" /></div>
                        <h1>Get a discount on every purchase</h1>
                        <div class="textwidget">Our VIP members get a permanent discount on EVERY purchase. On every purchase you make you will see the sum of points you receive for that purchase at your "Purchase-Summary - VIP Plan"</div>
                    </div>
                </div>
                <div class="loyalty_div"><a class="btn-signup">Create an account</a></div>
            </div>
        </>
    )
}

export default Royalty;
