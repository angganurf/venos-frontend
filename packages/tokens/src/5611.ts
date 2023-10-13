import { ChainId, ERC20Token, WBNB } from '@pancakeswap/sdk'
import { BUSD_BSC, CAKE_MAINNET, USDT_BSC } from './common'

export const bscTokens = {
  wbnb: WBNB[ChainId.BSC],
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  bnb: new ERC20Token(
    ChainId.BSC,
    '0xF0B4a48860434a386489Eb07900A2Fd20B5F45EB',
    18,
    'tBNB',
    'tBNB',
    'https://www.binance.com/',
  ),
  cake: CAKE_MAINNET,
  busd: BUSD_BSC,
  usdt: USDT_BSC,
  tifot: new ERC20Token(
    ChainId.BSC,
    '0x752982a24C733c5ac62EfB6979Bd1927993f0ab8',
    18,
    'tVenos',
    'Venos Testnet',
    'https://venosproject.org',
  ),

  cpt: new ERC20Token(
    ChainId.BSC,
    '0xcFE4C0783d103C44f403Bb287d29af0bAE5D4E84',
    8,
    'CPT',
    'Crest Protocol',
    'https://crestprotocol.co',
  ),

  lazio: new ERC20Token(
    ChainId.BSC,
    '0xcFE4C0783d103C44f403Bb287d29af0bAE5D4E84',
    8,
    'lazio',
    'lazio',
    'https://crestprotocol.co',
  ),

  porto: new ERC20Token(
    ChainId.BSC,
    '0xcFE4C0783d103C44f403Bb287d29af0bAE5D4E84',
    8,
    'porto',
    'porto',
    'https://crestprotocol.co',
  ),
  santos: new ERC20Token(
    ChainId.BSC,
    '0xcFE4C0783d103C44f403Bb287d29af0bAE5D4E84',
    8,
    'porto',
    'porto',
    'https://crestprotocol.co',
  ),
  mbox: new ERC20Token(
    ChainId.BSC,
    '0xcFE4C0783d103C44f403Bb287d29af0bAE5D4E84',
    8,
    'porto',
    'porto',
    'https://crestprotocol.co',
  ),
  lvl: new ERC20Token(
    ChainId.BSC,
    '0xcFE4C0783d103C44f403Bb287d29af0bAE5D4E84',
    8,
    'porto',
    'porto',
    'https://crestprotocol.co',
  ),
  dar: new ERC20Token(
    ChainId.BSC,
    '0xcFE4C0783d103C44f403Bb287d29af0bAE5D4E84',
    8,
    'porto',
    'porto',
    'https://crestprotocol.co',
  ),
  yz: new ERC20Token(
    ChainId.BSC,
    '0xe191a4d47A6be111C75139757CDDBb61BEEd88FB',
    18,
    'YZ',
    'Yieldz Protoco',
    'https://yieldzprotocol.com/',
  ),
  woof: new ERC20Token(
    ChainId.BSC,
    '0x5C44d3D2312AbA4d5F2406A98Bf374Bc76455092',
    18,
    'WOOF',
    'Moon Dogs',
    'https://www.woofsite.com/',
  ),

  CUBI: new ERC20Token(ChainId.BSC, '0x864e732666df56b096f2732C1013AE375282dc4b', 18, 'CUBI', 'CUBI', ''),

  syrup: new ERC20Token(
    ChainId.BSC,
    '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
    18,
    'SYRUP',
    'SyrupBar ERC20Token',
    'https://pancakeswap.finance/',
  ),
  eth: new ERC20Token(
    ChainId.BSC,
    '0xeAB3aC417c4d6dF6b143346a46fEe1B847B50296',
    18,
    'ETH',
    'Core Ethereum ERC20Token',
    'https://ethereum.org/en/',
  ),
  usdc: new ERC20Token(
    ChainId.BSC,
    '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
    18,
    'USDC',
    'Binance-Peg USD Coin',
    'https://www.centre.io/usdc',
  ),
  crust: new ERC20Token(
    ChainId.BSC,
    '0x29665752a02067DdaCaA4E76faF7f8871823da1c',
    18,
    'CRUST',
    'Crust Exchange',
    'https://www.crustexchange.io/',
  ),
}