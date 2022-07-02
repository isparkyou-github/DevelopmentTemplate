/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Stabilizer, StabilizerInterface } from "../Stabilizer";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "executor",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "goStabilizer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_usdc_usc_lpAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_usdc",
        type: "address",
      },
      {
        internalType: "address",
        name: "_usc",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "openBuy",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "openSell",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_type",
        type: "bool",
      },
    ],
    name: "setExecutor",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_type",
        type: "bool",
      },
    ],
    name: "setOpenBuy",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_type",
        type: "bool",
      },
    ],
    name: "setOpenSell",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "usc",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "usdc",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "usdc_usc_lpAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amt",
        type: "uint256",
      },
    ],
    name: "withdrawalERC20",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506114ee806100206000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063796c7be711610097578063c0c53b8b11610066578063c0c53b8b146101ae578063d4a67930146101c1578063f1eae64a146101c9578063f2fde38b146101d1576100f5565b8063796c7be7146101835780637e6f7a091461018b5780638da5cb5b14610193578063930ed0331461019b576100f5565b80633c03b9a4116100d35780633c03b9a41461014b5780633e413bee1461015e57806348c7e52814610166578063715018a614610179576100f5565b80631e1bff3f146100fa57806329e9a524146101235780633011d3d514610136575b600080fd5b61010d610108366004611051565b6101e4565b60405161011a91906111bc565b60405180910390f35b61010d6101313660046110b4565b61025d565b61013e6102be565b60405161011a919061118f565b61010d6101593660046110b4565b6102cd565b61013e61032f565b61010d610174366004610fcf565b61033e565b610181610353565b005b61010d61039e565b61013e61099d565b61013e6109ac565b61010d6101a9366004611089565b6109bb565b6101816101bc366004611007565b610a19565b61010d610af0565b61010d610b00565b6101816101df366004610fcf565b610b10565b60006101ee610b81565b6001600160a01b03166101ff6109ac565b6001600160a01b03161461022e5760405162461bcd60e51b8152600401610225906112f8565b60405180910390fd5b506001600160a01b0382166000908152606560205260409020805482151560ff19909116179055600192915050565b6000610267610b81565b6001600160a01b03166102786109ac565b6001600160a01b03161461029e5760405162461bcd60e51b8152600401610225906112f8565b506068805460ff60a01b1916600160a01b8315150217905560015b919050565b6068546001600160a01b031681565b60006102d7610b81565b6001600160a01b03166102e86109ac565b6001600160a01b03161461030e5760405162461bcd60e51b8152600401610225906112f8565b5060688054821515600160a81b0260ff60a81b199091161790556001919050565b6067546001600160a01b031681565b60656020526000908152604090205460ff1681565b61035b610b81565b6001600160a01b031661036c6109ac565b6001600160a01b0316146103925760405162461bcd60e51b8152600401610225906112f8565b61039c6000610b85565b565b3360009081526065602052604081205460ff166103cd5760405162461bcd60e51b815260040161022590611220565b600080606660009054906101000a90046001600160a01b03166001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561041e57600080fd5b505afa158015610432573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061045691906110ec565b506001600160701b031691506001600160701b031691506000606660009054906101000a90046001600160a01b03166001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b1580156104bd57600080fd5b505afa1580156104d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f59190610feb565b60685490915060009081906001600160a01b0380851691161461051957848461051c565b83855b6067546066546040516370a0823160e01b81529395509193506000926001600160a01b03918216926370a08231926105599291169060040161118f565b60206040518083038186803b15801561057157600080fd5b505afa158015610585573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105a9919061112f565b6068546066546040516370a0823160e01b81529293506000926001600160a01b03928316926370a08231926105e39291169060040161118f565b60206040518083038186803b1580156105fb57600080fd5b505afa15801561060f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610633919061112f565b905060006106538261064d85670de0b6b3a7640000610bd7565b90610bea565b9050670de0b6b3a7640000811180156106755750606854600160a81b900460ff165b156107e257600061068b600261064d8686610bf6565b6068546040516340c10f1960e01b81529192506001600160a01b0316906340c10f19906106be90309085906004016111a3565b602060405180830381600087803b1580156106d857600080fd5b505af11580156106ec573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071091906110d0565b5060665460685461072e916001600160a01b03918216911683610c02565b600061073b828789610c5d565b60685490915060009081906001600160a01b038b811691161461076057826000610764565b6000835b6066546040805160008152602081019182905263022c0d9f60e01b9091529294509092506001600160a01b03169063022c0d9f906107ab90859085903090602481016113ae565b600060405180830381600087803b1580156107c557600080fd5b505af11580156107d9573d6000803e3d6000fd5b50505050505050505b670de0b6b3a7640000811080156108025750606854600160a01b900460ff165b1561098e576000610818600261064d8587610bf6565b6067546040516370a0823160e01b81529192506000916001600160a01b03909116906370a082319061084e90309060040161118f565b60206040518083038186803b15801561086657600080fd5b505afa15801561087a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061089e919061112f565b90506000818311156108b15750806108b4565b50815b801561098a576066546067546108d7916001600160a01b03918216911683610c02565b60006108e4828a8a610c5d565b60675490915060009081906001600160a01b038d81169116146109095782600061090d565b6000835b6066546040805160008152602081019182905263022c0d9f60e01b9091529294509092506001600160a01b03169063022c0d9f9061095490859085903090602481016113ae565b600060405180830381600087803b15801561096e57600080fd5b505af1158015610982573d6000803e3d6000fd5b505050505050505b5050505b60019850505050505050505090565b6066546001600160a01b031681565b6033546001600160a01b031690565b60006109c5610b81565b6001600160a01b03166109d66109ac565b6001600160a01b0316146109fc5760405162461bcd60e51b8152600401610225906112f8565b610a106001600160a01b0384163384610c02565b50600192915050565b600054610100900460ff1680610a32575060005460ff16155b610a4e5760405162461bcd60e51b8152600401610225906112aa565b600054610100900460ff16158015610a79576000805460ff1961ff0019909116610100171660011790555b610a81610cab565b606680546001600160a01b038087166001600160a01b031992831617909255606780548684169083161790556068805460ff60a81b1960ff60a01b19948716919093161792909216600160a01b1716600160a81b1790558015610aea576000805461ff00191690555b50505050565b606854600160a01b900460ff1681565b606854600160a81b900460ff1681565b610b18610b81565b6001600160a01b0316610b296109ac565b6001600160a01b031614610b4f5760405162461bcd60e51b8152600401610225906112f8565b6001600160a01b038116610b755760405162461bcd60e51b8152600401610225906111da565b610b7e81610b85565b50565b3390565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000610be3828461141d565b9392505050565b6000610be382846113fd565b6000610be3828461143c565b610c588363a9059cbb60e01b8484604051602401610c219291906111a3565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610d2f565b505050565b600080610c6c856126f2610bd7565b90506000610c7a8285610bd7565b90506000610c9483610c8e88612710610bd7565b90610dbe565b9050610ca081836113fd565b979650505050505050565b600054610100900460ff1680610cc4575060005460ff16155b610ce05760405162461bcd60e51b8152600401610225906112aa565b600054610100900460ff16158015610d0b576000805460ff1961ff0019909116610100171660011790555b610d13610dca565b610d1b610e3d565b8015610b7e576000805461ff001916905550565b6000610d84826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610ead9092919063ffffffff16565b805190915015610c585780806020019051810190610da291906110d0565b610c585760405162461bcd60e51b815260040161022590611364565b6000610be382846113e5565b600054610100900460ff1680610de3575060005460ff16155b610dff5760405162461bcd60e51b8152600401610225906112aa565b600054610100900460ff16158015610d1b576000805460ff1961ff0019909116610100171660011790558015610b7e576000805461ff001916905550565b600054610100900460ff1680610e56575060005460ff16155b610e725760405162461bcd60e51b8152600401610225906112aa565b600054610100900460ff16158015610e9d576000805460ff1961ff0019909116610100171660011790555b610d1b610ea8610b81565b610b85565b6060610ebc8484600085610ec4565b949350505050565b606082471015610ee65760405162461bcd60e51b815260040161022590611264565b610eef85610f79565b610f0b5760405162461bcd60e51b81526004016102259061132d565b600080866001600160a01b03168587604051610f279190611173565b60006040518083038185875af1925050503d8060008114610f64576040519150601f19603f3d011682016040523d82523d6000602084013e610f69565b606091505b5091509150610ca0828286610f7f565b3b151590565b60608315610f8e575081610be3565b825115610f9e5782518084602001fd5b8160405162461bcd60e51b815260040161022591906111c7565b80516001600160701b03811681146102b957600080fd5b600060208284031215610fe0578081fd5b8135610be381611495565b600060208284031215610ffc578081fd5b8151610be381611495565b60008060006060848603121561101b578182fd5b833561102681611495565b9250602084013561103681611495565b9150604084013561104681611495565b809150509250925092565b60008060408385031215611063578182fd5b823561106e81611495565b9150602083013561107e816114aa565b809150509250929050565b6000806040838503121561109b578182fd5b82356110a681611495565b946020939093013593505050565b6000602082840312156110c5578081fd5b8135610be3816114aa565b6000602082840312156110e1578081fd5b8151610be3816114aa565b600080600060608486031215611100578283fd5b61110984610fb8565b925061111760208501610fb8565b9150604084015163ffffffff81168114611046578182fd5b600060208284031215611140578081fd5b5051919050565b6000815180845261115f816020860160208601611453565b601f01601f19169290920160200192915050565b60008251611185818460208701611453565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b600060208252610be36020830184611147565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526024908201527f6578656375746f723a2063616c6c6572206973206e6f742074686520657865636040820152633aba37b960e11b606082015260800190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6040820152651c8818d85b1b60d21b606082015260800190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b600085825284602083015260018060a01b0384166040830152608060608301526113db6080830184611147565b9695505050505050565b600082198211156113f8576113f861147f565b500190565b60008261141857634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156114375761143761147f565b500290565b60008282101561144e5761144e61147f565b500390565b60005b8381101561146e578181015183820152602001611456565b83811115610aea5750506000910152565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0381168114610b7e57600080fd5b8015158114610b7e57600080fdfea2646970667358221220a0c03962c73a29e132403fdf92c07b20c546920115994a20746599319adfb85964736f6c63430008000033";

export class Stabilizer__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Stabilizer> {
    return super.deploy(overrides || {}) as Promise<Stabilizer>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Stabilizer {
    return super.attach(address) as Stabilizer;
  }
  connect(signer: Signer): Stabilizer__factory {
    return super.connect(signer) as Stabilizer__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StabilizerInterface {
    return new utils.Interface(_abi) as StabilizerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Stabilizer {
    return new Contract(address, _abi, signerOrProvider) as Stabilizer;
  }
}
