/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Core } from '@walletconnect/core'
import { ICore } from '@walletconnect/types'
import { Web3Wallet, IWeb3Wallet } from '@walletconnect/web3wallet'
export let web3wallet: IWeb3Wallet
export let core: ICore

async function createWeb3Wallet() {
  core = new Core({
    projectId: '6bc734a833276b3ccab735a0d374d3a8',
    relayUrl: 'wss://relay.walletconnect.com'
  })

  web3wallet = await Web3Wallet.init({
    core,
    metadata: {
      name: 'React Web3Wallet',
      description: 'React Web3Wallet for WalletConnect',
      url: 'https://walletconnect.com/',
      icons: ['https://avatars.githubusercontent.com/u/37784886']
    }
  })
}

const init = async () => {
  console.debug('init')

  await createWeb3Wallet()

  console.debug('web3wallet', web3wallet)
}

init().catch(console.error)