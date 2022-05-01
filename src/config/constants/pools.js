import tokens from './tokens';

export const PoolCategory = {
    CORE: 'Core',
    COMMUNITY: 'Community',
    BINANCE: 'Binance',
    AUTO: 'Auto'
};

const pools = [
  // {
  //   sousId: 0,
  //   stakingToken: tokens.bris,
  //   earningToken: tokens.bris,
  //   contractAddress: {
  //     97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
  //     56: '0xbe69572b574165658251e19469Ec47AF26AC508F',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '10',
  //   sortOrder: 1,
  //   isFinished: false,
  // },
  // {
  //   sousId: 3,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.oddz,
  //   contractAddress: {
  //     97: '',
  //     56: '0x44d1f81e80e43e935d66d65874354ef91e5e49f6',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '0.4843',
  // },
  {
    sousId: 3,
    stakingToken: tokens.bpad,
    earningToken: tokens.wbrise,
    contractAddress: {
      97: '',
      56: '',
      32520: '0x294037a277FF365500efFD7a5f84d119F88C408a'
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '100000',
  },
  // {
  //   sousId: 4,
  //   stakingToken: tokens.cos,
  //   earningToken: tokens.ktn,
  //   contractAddress: {
  //     97: '',
  //     56: '0x48852322a185dc5fc733ff8c8d7c6dcbd2b3b2a2',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '0.01215',
  // },

]

export default pools
