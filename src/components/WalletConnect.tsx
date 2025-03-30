
import React, { useEffect } from 'react';
import {
  RainbowKitProvider,
  ConnectButton,
  darkTheme,
  getDefaultWallets,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base, zora } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import '@rainbow-me/rainbowkit/styles.css';

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'AstraCoin',
  projectId: 'astracoin-webapp', // We use a default project ID here; in production, you should use your own
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
});

interface WalletConnectProps {
  buttonClassName?: string;
  onWalletConnect?: (address: string) => void;
}

const WalletConnect: React.FC<WalletConnectProps> = ({ buttonClassName, onWalletConnect }) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider 
        chains={chains} 
        theme={darkTheme({
          accentColor: '#7c3aed', // Purple accent color to match AstraCoin theme
          accentColorForeground: 'white',
          borderRadius: 'medium',
        })}
        initialChain={mainnet}
      >
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            authenticationStatus,
            mounted,
          }) => {
            const ready = mounted && authenticationStatus !== 'loading';
            const connected =
              ready &&
              account &&
              chain &&
              (!authenticationStatus || authenticationStatus === 'authenticated');
            
            // Call the callback when account changes
            useEffect(() => {
              if (connected && account?.address && onWalletConnect) {
                onWalletConnect(account.address);
              }
            }, [connected, account?.address]);

            return (
              <div
                {...(!ready && {
                  'aria-hidden': true,
                  'style': {
                    opacity: 0,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <button
                        onClick={openConnectModal}
                        className={buttonClassName || "bg-astral-500 hover:bg-astral-600 text-white py-2 px-4 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105"}
                      >
                        Connect Wallet
                      </button>
                    );
                  }

                  if (chain.unsupported) {
                    return (
                      <button 
                        onClick={openChainModal} 
                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg flex items-center justify-center"
                      >
                        Wrong network
                      </button>
                    );
                  }

                  return (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={openChainModal}
                        className="bg-astral-500/20 hover:bg-astral-600/20 text-astral-500 py-1 px-3 rounded-lg flex items-center gap-1"
                      >
                        {chain.hasIcon && (
                          <div
                            style={{
                              background: chain.iconBackground,
                              width: 16,
                              height: 16,
                              borderRadius: 999,
                              overflow: 'hidden',
                            }}
                          >
                            {chain.iconUrl && (
                              <img
                                alt={chain.name ?? 'Chain icon'}
                                src={chain.iconUrl}
                                style={{ width: 16, height: 16 }}
                              />
                            )}
                          </div>
                        )}
                        {chain.name}
                      </button>

                      <button 
                        onClick={openAccountModal} 
                        className="bg-astral-500 hover:bg-astral-600 text-white py-2 px-4 rounded-lg flex items-center gap-1"
                      >
                        {account.displayName}
                        {account.displayBalance ? ` (${account.displayBalance})` : ''}
                      </button>
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default WalletConnect;
