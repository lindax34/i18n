import React from 'react';
const tw = {
  view_asset_key_tips: (
    <div>
      以下是您的資產密鑰的詳細信息。 <strong> 請勿 </strong> 與任何人分享{' '}
    </div>
  ),
  personal_sign_tips: (
    <div>
      MetaMask 請求您使用 <i>Personal Sign</i> 方法重新簽名
    </div>
  ),
  sign_and_open_free_mode_tips: (
    <>
      本操作后免簽名模式将被開啟，無需再簽名。
      <br />
      <br />
      要切換模式，請至「交易按鈕」下方進行設定。
    </>
  ),
  'trade.i_understand': '我理解',
  'trade.flow_of_funds_tips': (
    <>
      <h3>資金流動</h3>資金將支付至您的 DeGate 餘額，而非您的錢包餘額。
      <br />
      <br />
      <h3>關於 DeGate 餘額</h3>DeGate 餘額代表用戶在 DeGate
      智能合約中持有的代幣。
      <br />
      由於 DeGate 智能合約完全去中心化的特性 ，用戶可以完全掌控 DeGate 餘額。
    </>
  ),
  stop_limit_order_desc: ({
    stopPrice,
    quoteSymbol,
    baseAmount,
    baseSymbol,
    price,
    isBuy,
    isStopPriceLessThanLastPrice,
  }: {
    stopPrice: string;
    quoteSymbol: string;
    baseAmount: string;
    baseSymbol: string;
    price: string;
    isBuy: boolean;
    isStopPriceLessThanLastPrice: boolean;
  }) => {
    return (
      <>
        如果最新價格
        {isStopPriceLessThanLastPrice ? '降至或低於' : '升至或高於'}
        <b>
          {stopPrice} {quoteSymbol}
        </b>
        會在價格
        <b>
          {price} {quoteSymbol}
        </b>
        處掛上{isBuy ? '買入' : '賣出'}
        <b>
          {baseAmount} {baseSymbol}
        </b>
        的訂單。
      </>
    );
  },
  'account.deposit_contract_tips_AMOUNT': (AMOUNT: string) => (
    <div>
      <b>標準</b>
      <div>
        透過一次代幣轉移到DeGate智能合約，資金被添加同時最小化燃料費。此方法每筆交易上限為
        {AMOUNT}美元。
      </div>
      <br />
      <b>進階</b>
      <div>
        通过调用DeGate智能合约的内部功能进行资金划入，该方式会产生较高的燃料費，但没有最大金额限制。
      </div>
    </div>
  ),
};
export default tw;
