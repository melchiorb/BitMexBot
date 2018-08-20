export enum OrdType {
  Market = "Market",
  Limit = "Limit",
  Stop = "Stop",
  StopLimit = "StopLimit"
}

export enum BinSize {
  M1 = "1m",
  M5 = "5m",
  H1 = "1h",
  D1 = "1d"
}

export namespace Req {
  export type GetQuote = {
    symbol: string,
    filter?: string,
    count?: number,
    reverse?: boolean
  }

  export type CreateOrder = {
    symbol: string,
    side?: "Buy" | "Sell",
    simpleOrderQty?: number,
    orderQty?: number,
    price?: number,
    stopPx?: number,
    ordType: OrdType,
    text?: string
  }

  export type GetPosition = {
    filter?: string,
    count?: number,
  }

  export type SetPositionLeverage = {
    symbol: string,
    leverage: number
  }

  export type GetTrades = {
    symbol: string,
    filter?: string,
    count?: number,
    start?: number,
    reverse?: boolean
  }

  export type GetTradesBucketed = {
    binSize: BinSize,
    symbol: string,
    filter?: string,
    count?: number,
    start?: number,
    reverse?: boolean
  }
}

export namespace Res {
  export type Quote = {
    timestamp: string,
    symbol?: string
    bidSize?: number,
    bidPrice?: number,
    askPrice?: number,
    askSize?: number
  }

  export type Order = {
    orderID: string,
    clOrdID?: string,
    clOrdLinkID?: string,
    account?: number,
    symbol?: string,
    side?: string,
    simpleOrderQty?: number,
    orderQty?: number,
    price?: number,
    displayQty?: number,
    stopPx?: number,
    pegOffsetValue?: number,
    pegPriceType?: string,
    currency?: string,
    settlCurrency?: string,
    ordType?: string,
    timeInForce?: string,
    execInst?: string,
    contingencyType?: string,
    exDestination?: string,
    ordStatus?: string,
    triggered?: string,
    workingIndicator?: true,
    ordRejReason?: string,
    simpleLeavesQty?: number,
    leavesQty?: number,
    simpleCumQty?: number,
    cumQty?: number,
    avgPx?: number,
    multiLegReportingType?: string,
    text?: string,
    transactTime?: string,
    timestamp?: string
  }

  export type Position = {
    account: number,
    symbol: string,
    currency: string,
    underlying?: string,
    quoteCurrency?: string,
    commission?: number,
    initMarginReq?: number,
    maintMarginReq?: number,
    riskLimit?: number,
    leverage?: number,
    crossMargin?: true,
    deleveragePercentile?: number,
    rebalancedPnl?: number,
    prevRealisedPnl?: number,
    prevUnrealisedPnl?: number,
    prevClosePrice?: number,
    openingTimestamp?: string,
    openingQty?: number,
    openingCost?: number,
    openingComm?: number,
    openOrderBuyQty?: number,
    openOrderBuyCost?: number,
    openOrderBuyPremium?: number,
    openOrderSellQty?: number,
    openOrderSellCost?: number,
    openOrderSellPremium?: number,
    execBuyQty?: number,
    execBuyCost?: number,
    execSellQty?: number,
    execSellCost?: number,
    execQty?: number,
    execCost?: number,
    execComm?: number,
    currentTimestamp?: string,
    currentQty?: number,
    currentCost?: number,
    currentComm?: number,
    realisedCost?: number,
    unrealisedCost?: number,
    grossOpenCost?: number,
    grossOpenPremium?: number,
    grossExecCost?: number,
    isOpen?: true,
    markPrice?: number,
    markValue?: number,
    riskValue?: number,
    homeNotional?: number,
    foreignNotional?: number,
    posState?: string,
    posCost?: number,
    posCost2?: number,
    posCross?: number,
    posInit?: number,
    posComm?: number,
    posLoss?: number,
    posMargin?: number,
    posMaint?: number,
    posAllowance?: number,
    taxableMargin?: number,
    initMargin?: number,
    maintMargin?: number,
    sessionMargin?: number,
    targetExcessMargin?: number,
    varMargin?: number,
    realisedGrossPnl?: number,
    realisedTax?: number,
    realisedPnl?: number,
    unrealisedGrossPnl?: number,
    longBankrupt?: number,
    shortBankrupt?: number,
    taxBase?: number,
    indicativeTaxRate?: number,
    indicativeTax?: number,
    unrealisedTax?: number,
    unrealisedPnl?: number,
    unrealisedPnlPcnt?: number,
    unrealisedRoePcnt?: number,
    simpleQty?: number,
    simpleCost?: number,
    simpleValue?: number,
    simplePnl?: number,
    simplePnlPcnt?: number,
    avgCostPrice?: number,
    avgEntryPrice?: number,
    breakEvenPrice?: number,
    marginCallPrice?: number,
    liquidationPrice?: number,
    bankruptPrice?: number,
    timestamp?: string,
    lastPrice?: number,
    lastValue?: number
  }

  export type Trade = {
    timestamp: string,
    symbol: string,
    side?: string,
    size?: number,
    price?: number,
    tickDirection?: string,
    trdMatchID?: string,
    grossValue?: number,
    homeNotional?: number,
    foreignNotional?: number
  }

  export type BucketedTrade = {
    timestamp: string,
    symbol: string,
    open?: number,
    high?: number,
    low?: number,
    close?: number,
    trades?: number,
    volume?: number,
    vwap?: number,
    lastSize?: number,
    turnover?: number,
    homeNotional?: number,
    foreignNotional?: number
  }
}
