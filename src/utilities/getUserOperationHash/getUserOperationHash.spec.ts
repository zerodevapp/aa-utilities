import type { UserOperationRequest } from "../../types"
import { getUserOperationHash } from "./getUserOperationHash"

describe("getUserOperationHash", () => {
    it("should transform a valid userOperation to a hash", () => {
        const userOperation: UserOperationRequest = {
            sender: '0x6a6F07c5c32F5fb20393a2110B2Bf0925e59571b',
            nonce: '0x0',
            initCode: '0x5d006d3880645ec6e254e18c1f879dac9dd71a39296601cd000000000000000000000000180d6465f921c7e0dea0040107d342c87455fff500000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001485fc2e4425d0daba7426f50091a384ee05d37cd2000000000000000000000000',
            callData: '0x519454470000000000000000000000006a6f07c5c32f5fb20393a2110b2bf0925e59571b00000000000000000000000000000000000000000000000000038d7ea4c68000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
            callGasLimit: '0x1e10e',
            verificationGasLimit: '0x9c6ce',
            maxFeePerGas: '0x59682f20',
            maxPriorityFeePerGas: '0x59682f00',
            paymasterAndData: '0xe93eca6595fe94091dc1af46aac2a8b5d7990770000000000000000000000000000000000000000000000000000000006494c938000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000fceab37ad3cf41cc14ada3c72efa106a4fc2d421eb816a0e808639d94d41e6146609e21c699fdc8049245db8574e1e57ee91cac122b84e21dce8f28972132d7b1c',
            signature: '0x4046ab7d9c387d7a5ef5ca0777eded29767fd9863048946d35b3042d2f7458ff7c62ade2903503e15973a63a296313eab15b964a18d79f4b06c8c01c7028143c1c',
            preVerificationGas: '0xc058'
        }
           
        const entryPointAddress = '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789'
        const userOperationHash = getUserOperationHash(userOperation, entryPointAddress, 80001n)
        expect(userOperationHash).toBe('0x4bd48712321a800996e0ba9861807ee59e2bf85db8633e97df66180b0d423dcf')
    })
    it("should throw error for an invalid userOperation", () => {
        const userOperation: UserOperationRequest = {
            sender: '0x6a6F07c5c32F5fb20393a2110B2Bf0925e59571b',
            nonce: '0x',
            initCode: '0x5d006d3880645ec6e254e18c1f879dac9dd71a39296601cd000000000000000000000000180d6465f921c7e0dea0040107d342c87455fff500000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001485fc2e4425d0daba7426f50091a384ee05d37cd2000000000000000000000000',
            callData: '0x519454470000000000000000000000006a6f07c5c32f5fb20393a2110b2bf0925e59571b00000000000000000000000000000000000000000000000000038d7ea4c68000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
            callGasLimit: '0x1e10e',
            verificationGasLimit: '0x9c6ce',
            maxFeePerGas: '0x59682f20',
            maxPriorityFeePerGas: '0x59682f00',
            paymasterAndData: '0xe93eca6595fe94091dc1af46aac2a8b5d7990770000000000000000000000000000000000000000000000000000000006494c938000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000fceab37ad3cf41cc14ada3c72efa106a4fc2d421eb816a0e808639d94d41e6146609e21c699fdc8049245db8574e1e57ee91cac122b84e21dce8f28972132d7b1c',
            signature: '0x4046ab7d9c387d7a5ef5ca0777eded29767fd9863048946d35b3042d2f7458ff7c62ade2903503e15973a63a296313eab15b964a18d79f4b06c8c01c7028143c1c',
            preVerificationGas: '0xc058'
        }
           
        const entryPointAddress = '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789'
        expect(() => getUserOperationHash(userOperation, entryPointAddress, 80001n)).toThrowError()
    })
})