import React, { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { connectorLocalStorageKey } from '../wallet/config';
import poolsConfig from '../../config/constants/pools';
import Pool from './Pool';
import { fetchPoolsAllowance, fetchUserBalances, fetchUserPendingRewards, fetchUserStakeBalances } from '../../state/pools/fetchPoolsUser';
import "./styles/pools.css";


const Pools = ({ login, onDismiss = () => null, logout }) => {

    const { active, account, library, connector, activate, deactivate } = useWeb3React();
    
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const connectWalletOnPageLoad = async () => {
            const connectorId = localStorage?.getItem(connectorLocalStorageKey);
            if (connectorId) {
                try {
                login(connectorId);
                window.initWeb3 = library;
                // localStorage.setItem('isWalletConnected', true)
                } catch (ex) {
                console.log(ex)
                }
            }
        }
        connectWalletOnPageLoad();
        (
            async () => {
                if(account !== undefined){
                    try {
                        const loadUserData = async() => {
                            const stakingTokenBalances = await fetchUserBalances(account);
                            const allowances = await fetchPoolsAllowance(account);
                            const stakedBalances = await fetchUserStakeBalances(account);
                            const pendingRewards = await fetchUserPendingRewards(account);
                            const userData = poolsConfig.map((pool) => ({
                                sousId: pool.sousId,
                                allowance: allowances[pool.sousId],
                                stakingTokenBalance: stakingTokenBalances[pool.sousId],
                                stakedBalance: stakedBalances[pool.sousId],
                                pendingReward: pendingRewards[pool.sousId],
                            }));
                
                            setUserData(userData);
                                    
                        }
                        await loadUserData(account);
                        
                    } catch (error) {
                        console.log(error);
                    }
                }
                

                
            }
        )();
    }, [account]);

    useEffect(() => {
        window.initWeb3 = library;
        const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
            (
                async () => {
                    if(account !== undefined){
                        try {
                            const loadUserData = async() => {
                                const stakingTokenBalances = await fetchUserBalances(account);
                                const allowances = await fetchPoolsAllowance(account);
                                const stakedBalances = await fetchUserStakeBalances(account);
                                const pendingRewards = await fetchUserPendingRewards(account);
                                const userData = poolsConfig.map((pool) => ({
                                    sousId: pool.sousId,
                                    allowance: allowances[pool.sousId],
                                    stakingTokenBalance: stakingTokenBalances[pool.sousId],
                                    stakedBalance: stakedBalances[pool.sousId],
                                    pendingReward: pendingRewards[pool.sousId],
                                }));
                                // console.log('userDetail userData: ', userData);
                                setUserData(userData);
                                        
                            }
                            await loadUserData(account);
                        } catch (error) {
                            console.log(error);
                        }
                    }
                    
                }
            )();
        }, 15000)
        
        return () => clearInterval(intervalId); //This is important
    
    }, [])

    return(
        <div className='pools_container'>
            <div className='pools_content'>
                {
                    poolsConfig.map((pool, index) => (
                        <Pool
                            key={index}
                            pool={pool}
                            userData={userData.filter(data => data.sousId === pool.sousId)}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Pools;