// https://github.com/alchemyplatform/aa-sdk/blob/main/packages/core/src/types.ts
import { type Address } from "viem";

export type Hex = `0x${string}`
export type EmptyHex = `0x`


// represents the request as it needs to be formatted for RPC requests
export interface UserOperationRequest {
    /* the origin of the request */
    sender: Address;
    /* nonce (as hex) of the transaction, returned from the entrypoint for this Address */
    nonce: Hex;
    /* the initCode for creating the sender if it does not exist yet, otherwise "0x" */
    initCode: Hex | EmptyHex;
    /* the callData passed to the target */
    callData: Hex;
    /* Gas value (as hex) used by inner account execution */
    callGasLimit: Hex;
    /* Actual gas (as hex) used by the validation of this UserOperation */
    verificationGasLimit: Hex;
    /* Gas overhead (as hex) of this UserOperation */
    preVerificationGas: Hex;
    /* Maximum fee per gas (similar to EIP-1559 max_fee_per_gas) (as hex)*/
    maxFeePerGas: Hex;
    /* Maximum priority fee per gas (similar to EIP-1559 max_priority_fee_per_gas) (as hex)*/
    maxPriorityFeePerGas: Hex;
    /* Address of paymaster sponsoring the transaction, followed by extra data to send to the paymaster ("0x" for self-sponsored transaction) */
    paymasterAndData: Hex | EmptyHex;
    /* Data passed into the account along with the nonce during the verification step */
    signature: Hex;
}