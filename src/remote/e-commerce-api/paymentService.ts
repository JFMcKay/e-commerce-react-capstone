import PaymentDetail from "../../models/PaymentDetail"
import eCommerceClient, { eCommerceApiResponse } from "./eCommerceClient"

const baseURL = "/api/payment"

export const apiCreatePayment = async (paymentDetails : PaymentDetail[]) : Promise<eCommerceApiResponse> => {
    const requestBody : any = {
        "ccv" : paymentDetails[0].detail,
        "expDate" : paymentDetails[3].detail,
        "cardNumber" : paymentDetails[2].detail
    }
    const response = await eCommerceClient.post(
        `${baseURL}`,
        requestBody
        );
    return { status : response.status, payload : response.data}
}