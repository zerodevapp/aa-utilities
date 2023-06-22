# ZeroDev - AA Helper Library

## Installation

### npm
```
npm install --dev @zerodevapp/aa-utilities
```

### yarn
```
yarn add @zerodevapp/aa-utilities
```

## Usage
### getUserOperationHash
```typescript
import { getUserOperationHash } from "@zerodevapp/aa-utilities"
const userOperation = {
    sender: '',
    nonce: '',
    initCode: '',
    callData: '',
    callGasLimit: '',
    verificationGasLimit: '',
    maxFeePerGas: '',
    maxPriorityFeePerGas: '',
    paymasterAndData: '',
    signature: '',
    preVerificationGas: ''
}

const entryPointAddress = '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789' // 0.6 Entrypoint address

const chainId = 80001n // Polygon Mumbai Chain ID

const userOperationHash = getUserOperationHash(userOperation, entryPointAddress, chainId)
```