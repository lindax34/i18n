import React from 'react';
const en = {
  view_asset_key_tips: (
    <div>
      Here are the details of your Asset Key. <strong>Do NOT share</strong> with
      anyone to prevent potential asset loss.
    </div>
  ),
  personal_sign_tips: (
    <div>
      MetaMask requests you to sign again with <i>Personal Sign</i> method
    </div>
  ),
  sign_and_open_free_mode_tips: (
    <>
      Signing is not required as the Signature-free mode will be turned on after
      this action.
      <br />
      <br />
      To switch mode, navigate to &quot;Settings&quot; below the Trade Button.
    </>
  ),
  'trade.i_understand': <span>I understand the </span>,
  'trade.flow_of_funds_tips': (
    <>
      <h3>Flow of Funds</h3>Funds will go to your DeGate Balance, not your
      wallet balance.
      <br />
      <br />
      <h3>About DeGate Balance</h3>DeGate Balance represents the value that
      users hold within the DeGate smart contract.
      <br />
      Users maintain complete custody of DeGate Balance thanks to the fully
      decentralized DeGate smart contract.
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
        If the latest price{' '}
        {isStopPriceLessThanLastPrice
          ? 'drop to or below '
          : 'rises to or above '}
        <b>
          {stopPrice} {quoteSymbol}
        </b>
        , an order to {isBuy ? 'buy' : 'sell'}{' '}
        <b>
          {baseAmount} {baseSymbol}
        </b>{' '}
        at the price of{' '}
        <b>
          {price} {quoteSymbol}
        </b>{' '}
        will be placed.
      </>
    );
  },
  'account.deposit_contract_tips_AMOUNT': (AMOUNT: string) => (
    <div>
      <b>Standard</b>
      <div>
        Through a simple token transfer to the DeGate smart contract, funds are
        added while minimizing gas fees. This method has a per transaction cap
        of {AMOUNT}USD.
      </div>
      <br />
      <b>Advanced</b>
      <div>
        This method employs an internal function of the DeGate smart contract,
        incurring higher gas fees. However, it comes with no maximum limit.
      </div>
    </div>
  ),
};
export default en;
