import { BigNumber } from '@ethersproject/bignumber'
import { Pool } from '@pancakeswap/uikit'
import { SerializedWrappedToken } from '@pancakeswap/token-lists'
import Trans from 'components/Trans'
import { VaultKey } from 'state/types'
import { bscTokens } from '@pancakeswap/tokens'
import { PoolCategory } from './types'

export const MAX_LOCK_DURATION = 31536000
export const UNLOCK_FREE_DURATION = 604800
export const ONE_WEEK_DEFAULT = 604800
export const BOOST_WEIGHT = BigNumber.from('20000000000000')
export const DURATION_FACTOR = BigNumber.from('31536000')

export const vaultPoolConfig = {
  [VaultKey.CakeVaultV1]: {
    name: <Trans>Auto CAKE</Trans>,
    description: <Trans>Automatic restaking</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 380000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.CakeVault]: {
    name: <Trans>Stake CAKE</Trans>,
    description: <Trans>Stake, Earn – And more!</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 600000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.CakeFlexibleSideVault]: {
    name: <Trans>Flexible CAKE</Trans>,
    description: <Trans>Flexible staking on the side.</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.IfoPool]: {
    name: 'IFO CAKE',
    description: <Trans>Stake CAKE to participate in IFOs</Trans>,
    autoCompoundFrequency: 1,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.svg`,
      secondarySrc: `/images/tokens/ifo-pool-icon.svg`,
    },
  },
} as const

export const livePools: Pool.SerializedPoolConfig<SerializedWrappedToken>[] = [
  {
    sousId: 0,
    stakingToken: bscTokens.cake,
    earningToken: bscTokens.cake,
    contractAddress: {
      97: '0xB4A466911556e39210a6bB2FaECBB59E4eB7E43d',
      5611: '0xc7887af5f95cdee2b7bbff47554104e8631751df',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '10',
    isFinished: false,
  },

  {
    sousId: 1,
    stakingToken: bscTokens.cake,
    earningToken: bscTokens.cpt,
    contractAddress: {
      5611: '0x7965675ea8A4053818097e0c150445a406ea0Fa0',
      97: '',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.5',
    version: 3,
    enableEmergencyWithdraw: true,
    isFinished: true,
  },
  {
    sousId: 2,
    stakingToken: bscTokens.cpt,
    earningToken: bscTokens.cpt,
    contractAddress: {
      5611: '0xf6a333f17cf10379b6B9c5604FBF6343cF5134f3',
      97: '',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.4',
    version: 3,
  },
  {
    sousId: 3,
    stakingToken: bscTokens.cake,
    earningToken: bscTokens.cpt,
    contractAddress: {
      5611: '0xF7B4f5105170ECd1742836C9574eA8831eb4Da9C',
      97: '',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.3',
    version: 3,
    enableEmergencyWithdraw: true,
  },
  {
    sousId: 4,
    stakingToken: bscTokens.cpt,
    earningToken: bscTokens.wbnb,
    contractAddress: {
      5611: '0xE828C2dB31782338Ab48605099A3C9A83306fe9E',
      97: '',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.0057',
    version: 3,
  },
].map((p) => ({
  ...p,
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize,
}))

// known finished pools
const finishedPools = [].map((p) => ({
  ...p,
  isFinished: true,
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize,
}))

export default [...livePools, ...finishedPools] as Pool.SerializedPoolConfig<SerializedWrappedToken>[]
