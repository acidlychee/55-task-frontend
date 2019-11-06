export interface ExecutionReport {
    id: number
    cancelledQty: number
    childOrder: number
    childOrderId: string
    createdAt: number
    exchangeAccountId: string
    exchangeOrderId: string
    executedPrice: number
    executedQty: number
    filled: number
    kafkaOffset: number
    lastFilledPrice: number
    lastFilledQty: number
    leavesQty: number
    orderId: string
    orderStatus: string
    partitionId: string
    price: number
    pricePrecision: number
    qtyPrecision: number
    rejectCode: string
    rejectReason: string
    remainingQty: number
    reportType: string
    side: string
    symbol: string
    timestamp: Date
    transactTime: number
    type: string
    venue: string
}
