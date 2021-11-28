import "dotenv/config";
import "@nomiclabs/hardhat-etherscan"
import "@nomiclabs/hardhat-waffle"
import "hardhat-gas-reporter"
import "solidity-coverage"

import {HardhatUserConfig} from 'hardhat/types'
import "@nomiclabs/hardhat-ethers";
import 'hardhat-deploy-ethers';
import 'hardhat-deploy';
import { removeConsoleLog } from "hardhat-preprocessor"

const privateKey:string = process.env.PRIVATE_KEY!
 //console.log(privateKey);

const config: HardhatUserConfig = {
    defaultNetwork: "matic",
    networks: {
        hardhat: {
        },
        matic: {
        url: "https://polygon-rpc.com/",
        accounts: [privateKey]
        }
    },
    solidity: {
        
        compilers: [
            {
                version: '0.7.6',
            },
            {
              version: "0.8.0", 
            }
          ]

    },
    namedAccounts: {
        deployer: 0,
        tokenOwner: 1,
        buyer: 2,
    },
    paths: {
        sources: 'contracts',
        artifacts: 'artifacts',
        deploy: 'deploy',
        deployments: 'deployments',
    },
}

export default config;

