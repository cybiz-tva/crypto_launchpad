import { Link } from "react-router-dom";
import "./styles/pool.css";

const Pool = ({ pool, userData }) => {

    // console.log('pool userData: ', userData[0]);

    return (
        <div className='pool_container'>
            {/* <h4>Pool Sous ID {pool.sousId}</h4> */}
            <div className='brise_img_container'>
                <img className='brise_img' src={`images/briselogo/brise.png`} alt='brise' />
            </div>
            <p className='stake_text'>Stake {pool.stakingToken.symbol}</p>
            <p className='earn_text'>Earn {pool.earningToken.symbol}</p>

            <Link className='pool_select_btn' to={`/pool/${pool.sousId}`}>Select</Link>
        </div>
    );
}

export default Pool;