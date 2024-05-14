import React from 'react';
const en = {
  view_asset_key_tips: (
    <div>
      以下为您的资产密钥。<strong>不要</strong>
      与任何人分享，以防止潜在的资产损失。
    </div>
  ),
  personal_sign_tips: 'Metamask请求以Personal Sign的形式重新签名',
  sign_and_open_free_mode_tips: (
    <>
      本次操作后免签名模式将被开启，接下来无需签名。
      <br />
      <br />
      切换模式，请在交易按钮下方的“设置”中完成。
    </>
  ),
  'trade.i_understand': '我已明白',
  'trade.flow_of_funds_tips': (
    <>
      <h3>资金流向</h3>资金将转入您的DeGate余额，而非您的钱包余额。
      <br />
      <br />
      <h3>关于DeGate余额</h3>DeGate余额是用户在DeGate智能合约中持有的资产。
      <br />
      用户完全掌控自己的DeGate余额，因为DeGate的智能合约是完全去中心化的。
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
        如果最新价格
        {isStopPriceLessThanLastPrice ? '降至或低于' : '升至或高于'}
        <b>
          {stopPrice} {quoteSymbol}
        </b>
        ，会在价格
        <b>
          {price} {quoteSymbol}
        </b>
        处挂上{isBuy ? '买入' : '卖出'}
        <b>
          {baseAmount} {baseSymbol}
        </b>
        的订单。
      </>
    );
  },
  'account.deposit_contract_tips_AMOUNT': (AMOUNT: string) => (
    <div>
      <b>标准方式</b>
      <div>
        {`通过"标准代币转账"向DeGate智能合约进行资金划入所需gas费用较少，但每笔交易上限为${AMOUNT}美元。`}
      </div>
      <br />
      <b>高级方式</b>
      <div>
        通过调用DeGate智能合约的内部功能进行资金划入，该方式会产生较高的gas费用，但没有最大金额限制。
      </div>
    </div>
  ),
};
export default en;
