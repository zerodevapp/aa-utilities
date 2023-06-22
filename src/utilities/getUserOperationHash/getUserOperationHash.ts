import { type Address, encodeAbiParameters, keccak256 } from "viem";
import { packUo } from "../packUo.js";
import { type UserOperationRequest } from "../../types.js";

export function getUserOperationHash(
    request: UserOperationRequest,
    entryPointAddress: Address,
    chainId: bigint
  ): string {
    const encoded = encodeAbiParameters(
      [{ type: "bytes32" }, { type: "address" }, { type: "uint256" }],
      [keccak256(packUo(request)), entryPointAddress, chainId]
    ) as `0x${string}`;
  
    return keccak256(encoded);
}