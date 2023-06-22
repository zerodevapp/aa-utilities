import { Address, Hex, encodeAbiParameters, hexToBigInt, keccak256 } from "viem";
import { UserOperationRequest } from "../types";

export function packUo(request: UserOperationRequest): Hex {
    const hashedInitCode = keccak256(request.initCode);
    const hashedCallData = keccak256(request.callData);
    const hashedPaymasterAndData = keccak256(request.paymasterAndData);
  
    return encodeAbiParameters(
      [
        { type: "address" },
        { type: "uint256" },
        { type: "bytes32" },
        { type: "bytes32" },
        { type: "uint256" },
        { type: "uint256" },
        { type: "uint256" },
        { type: "uint256" },
        { type: "uint256" },
        { type: "bytes32" },
      ],
      [
        request.sender as Address,
        hexToBigInt(request.nonce),
        hashedInitCode,
        hashedCallData,
        hexToBigInt(request.callGasLimit),
        hexToBigInt(request.verificationGasLimit),
        hexToBigInt(request.preVerificationGas),
        hexToBigInt(request.maxFeePerGas),
        hexToBigInt(request.maxPriorityFeePerGas),
        hashedPaymasterAndData,
      ]
    );
}
