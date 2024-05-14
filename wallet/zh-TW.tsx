const tw = {
  language: 'zh-TW',
  choose_token: '選擇代幣',
  recipient: '接收地址',
  recent: '最近',
  price: '價格',
  amount: '數量',
  available: '可用',
  gas_fee: '燃料費',
  Send: '發送',
  Send_ETH: '發送 ETH',
  Internal_Transfer: '內部轉帳',
  transfer_tips: '將代幣轉移至DeGate協議內的另一個地址。',
  transfer_ETH: '內部轉帳 ETH',
  btn_max: '最大值',
  degate_insufficient_balance: '餘額不足',
  max_digits_exceeded: '超過最大位數',
  wallet_insufficient_fees: '錢包餘額不足',
  deGate_insufficient_fees: '',
  token_search_placeholder: '搜索代幣，合約地址',
  token: '代幣',
  degate_balance: 'DeGate餘額',
  tips_gas: '用於執行此鏈上交易的燃料費將從您的DeGate餘額中扣除。',
  tips_gas2: '燃料費涵蓋了交易結算的鏈上成本。多餘的費用將被退款。',
  Close: '關閉',
  Help: '幫助',
  no_token: '找不到代幣',
  chain_1: '主網',
  chain_3: 'Ropsten（測試網）',
  chain_4: 'Rinkeby（測試網）',
  chain_5: 'Goerli（測試網）',
  chain_42: 'Kovan（測試網）',
  chain_42161: 'Arbitrum（二層網路）',
  chain_10: 'Optimism（二層網路）',
  Cancel: '取消',
  go_back: '返回',
  Back: '返回',
  copied: '已複製',
  Confirm: '確認',
  Create: '創建',
  Abort: '中止',
  btn_confirm: '關閉',
  btn_got_it: '知道了',
  wallet_cancelled_tips: '您取消了簽名',
  connect_ledger: '連接 Ledger 冷錢包',
  ledger_disconnect: '無法執行“transferOut”於“USBDevice”：設備已斷開連接',
  wallet_tips: '請在瀏覽器錢包中批准',
  wallet_ledger_tips: '請在 Ledger 冷錢包中批准',
  wallet_metamask_tips: '請在 MetaMask 中批准',
  wallet_walletconnect_tips: '請前往您的錢包，並使用 WalletConnect 批准',
  view_asset_key: '查看資產密鑰',
  export_key_warning: '資產密鑰的洩漏可能導致資產損失。請確保其安全',
  export_key_confirm_btn: '繼續查看',
  btn_buy_ETH: '購買 ETH',
  btn_sell_ETH: '出售 ETH',
  around: '～',
  need_help: '幫助',
  time_now: '現在',
  time_1_minute: '1分鐘',
  time_1_hour: '1小時',
  time_1_day: '1天',
  time_1_year: '1年',
  time_M_minutes: 'M分鐘',
  time_M_m: 'M分鐘',
  time_H_hours: 'H小時',
  time_H_h: 'H小時',
  time_D_days: 'D天',
  time_D_d: 'D天',
  time_Y_years: 'Y年',
  time_Y_y: 'Y年',
  personal_sign_reason: '可能的原因',
  personal_sign_reason1: '1. MetaMask 已連接到硬件錢包',
  personal_sign_reason2: '2. MetaMask 版本過時',
  personal_sign_reason3: '3. 其他',
  personal_sign_btn: '重新簽名',
  switch_wallet: '切換帳戶',
  switch_walletConnect_tips1:
    '如果您希望切換到同一錢包軟體中的另一個帳戶，請直接從錢包執行並取消此請求',
  switch_walletConnect_tips2:
    '如果您希望通過不同的錢包軟體使用 WalletConnect ，系統將先斷開現有的連接',
  switch_walletConnect_continue: '斷開並繼續',
  switch_metamask_tips: '請前往 MetaMask 切換帳戶',
  switch_browser_wallet_tips: '請在瀏覽器錢包中切換帳戶',
  period_expired: '已過期',
  period_D_day_H_hour: 'D天 H小时',
  period_H_hour_M_minute: 'H小时 M分钟',
  login_success: '連接成功',
  advanced: '進階',
  edit: '編輯',
  save: '保存',
  speed_up: '加速',
  continue: '繼續',
  Submit: '提交',
  icon_copy: '複製地址',
  icon_view_explorer: '在區塊瀏覽器上查看',
  upcoming_lock_tips: '由於一段時間未活躍，標準授權模式將關閉，以保護您的安全',
  auto_locked_tips: '為了您的安全，在15分鐘未活躍後，標準授權模式已關閉',
  keep: '保留',
  turn_off_now: '立即關閉',
  turn_on: '開啟',
  turn_on_signature_free_mode: '開啟免簽名模式',
  turn_on_signature_free_mode_success: '免簽名模式已開啟',
  max_XXX: '最大值 XXX',
  min_XXX: '最小值 XXX',
  common_err: '出了些問題。請稍後再試',
  input_auto_corrected_tips: '已超過最大位數，系統自動更正您的輸入。',
  maximum_decimal_reached: '已達到最大小數位數',
  verify_ownership: '驗證所有權',
  execute: '執行',
  sign_step1: '在您的錢包中完成',
  sign_step2: '完成第二次簽名',
  sign_step3: '完成第三次簽名',
  place_order: '下單',
  create_spot_order: '下單',
  create_grid_strategy: '創建網格策略',
  create_DCA_plan: '創建定期定額計劃',
  cancel_order: '取消訂單',
  end_grid_strategy: '結束網格策略',
  end_DCA: '結束定投計劃',
  Seconds: '秒',
  complete_in_seconds: '立即完成',
  complete_in: '完成時間',
  me: '我',
  eth_code_tips: '以太坊的原生代幣。無代幣合約地址',
  total: '總計',
  order_amount: '訂單額',
  operation_has_expired: '操作已過期',
  Approve: '批准',
  tips_hide_forever: '不再顯示',
  Tips: '提示',
  Note: '備註',
  Summary: '摘要',
  Orders: '訂單',
  Side: '方向',
  Sell: '賣出',
  Buy: '買入',
  now: '現在',
  order_type: '訂單類型',
  limit_order: '限價',
  market_order: '市價',
  required: '必填',
  check_address_format: '檢查地址格式',
  start_time: '開始時間',
  end_time: '結束時間',
  None: '無',
  time_out: '操作超時。請重新嘗試。',
  deposit_ETH: '添加 ETH',
  'grid.confirm_grid': '確認網格策略',
  'grid.initial_investment': '理財',
  'grid.price_range': '價格範圍',
  'grid.grid_level': '網格數量',
  'grid.grid_volume': '每個網格的數量',
  'grid.profit_per_grid': '每個網格的利潤',
  'grid.expired_in': '過期時間',
  'grid.replace_modal_title': '網格策略已更新',
  'grid.replace_modal_content':
    '由於訂單簿最近的變化，原始網格策略已更新如下。',
  'grid.replace_modal_pre': '之前',
  'grid.replace_modal_next': '之後',
  'grid.replace_modal_err': '餘額不足以建立網格策略。請返回編輯網格參數。',
  'ledger.connect_rule_1': '1. 將 Ledger 連接到您的設備',
  'ledger.connect_rule_2': '2. 在 Ledger 上解鎖',
  'ledger.connect_rule_3': '3. 在 Ledger 上打開以太坊應用',
  'ledger.connect_rule_4': '4. 確保啟用了盲簽名/合約數據和瀏覽器支持',
  'ledger.unable_to_approve': '無法批准',
  'ledger.webusb_1tab_tips_desc_1':
    '此瀏覽器僅支持 Ledger 批准的單個瀏覽器分頁。由於另一個分頁正在使用此功能，無法批准。',
  'ledger.webusb_1tab_tips_desc_2': '請重新插入 Ledger 以重新啟動操作。',
  'ledger.locked_tips': '請解鎖 Ledger，打開以太坊應用程序並批准。',
  'ledger.account_not_match':
    '檢測到錯誤的 Ledger 錢包。請連接到正確的 Ledger。',
  'ledger.ledger_choose_address': '選擇地址',
  'ledger.address': '地址',
  'ledger.connect': '連接',
  'ledger.un_supported_title': '當前瀏覽器不支持 Ledger 錢包連接',
  'ledger.un_supported_desc': '建議使用 Chrome 或 Edge 瀏覽器。',
  'ledger.confirm_gas_fee': '確認燃料費',
  'ledger.confirm_gas_fee_desc': '您即將在以太坊上啟動交易，請確認：',
  'ledger.max_gas_fee': '最大燃料費',
  'ledger.edit_gas_fee': '編輯燃料費',
  'ledger.max_fee': '燃料價格（Gwei）',
  'ledger.max_base_fee': '最大基礎費（Gwei）',
  'ledger.max_base_fee_tips':
    '當您的交易被包含在區塊中時，您的最大基礎費和實際基礎費之間的任何差額將被退款。',
  'ledger.priority_fee': '優先費（Gwei）',
  'ledger.priority_fee_tips':
    '優先費（又名“礦工費”）直接支付給礦工，鼓勵他們優先處理您的交易。',
  'ledger.gas_limit': '燃料限制：',
  'ledger.tx_speed_up_title': '加快交易',
  'ledger.tx_speed_up_desc': '您即將在以太坊上加速交易，請確認：',
  'ledger.tx_cancel_title': '取消交易',
  'ledger.tx_cancel_desc': '您即將在以太坊上取消交易，請確認：',
  'ledger.fee_minimum_xxx': '不能少於XXX',
  'ledger.ledger_app_version_tips':
    '將您的 Ledger 的以太坊應用程序更新到1.9.19版本或更高版本以在簽署之前預覽消息。',
  'operations.register_pair': '添加交易對',
  'operations.chain_cancel': '在鏈上取消訂單',
  'operations.chain_cancel_title':
    '此訂單取消請求將被發布在鏈上以保證訂單的取消。',
  'operations.chain_cancel_confirm': '確認取消',
  'operations.chain_cancel_confirm_tips':
    '在鏈上取消將產生燃氣費。您是否要繼續？',
  'operations.chain_cancel_grid_text_N':
    '在此網格策略中的<b> N 筆訂單</b>將提交進行鏈上取消。',
  'operations.chain_cancel_grid_gas_AMOUNT_ETH':
    '請再次確認在鏈上取消的燃料費<b>金額 ETH </b>。',
  'operations.claim_title': '領取獎勵',
  'operations.claim_desc':
    '此領取將通過內部轉賬記入您的DeGate 餘額。燃料費將直接從獎勵金額中扣除。',
  'operations.claim_desc_others': '此領取將通過內部轉賬記入您的 DeGate 餘額。',
  'operations.claim_rewards': '可領取獎勵',
  'operations.claim_err_amount': '可領取金額不足',
  'operations.claim': '領取',
  'operations.Claimable': '可領取',
  'operations.Unclaimed': '未領取',
  'operations.claim_mining_rewards': '領取挖礦獎勵',
  'operations.claim_rewards_desc': '獎勵將在扣除燃料費後發送到您的帳戶',
  'operations.pay_deposit': '結算',
  'operations.pay_deposit_title': '待支付',
  'operations.pay_deposit_desc_XXX_ETH': '您有 XXX ETH 的待增加資金。',
  'operations.pay_deposit_select_account': '支付來自',
  Wallet_Balance: '錢包餘額',
  'operations.pay_deposit_tips_XXX_ETH': '支付 XXX ETH',
  'operations.reset_account': '重置資產密鑰',
  'operations.reset_desc':
    '資產密鑰位於您的瀏覽器緩存中。如果您對本地環境的安全性感到擔心，請重置資產密鑰。',
  'operations.reset_warning':
    '在重置期間，所有操作，如交易，發送或內部轉賬，都將暫停。',
  'operations.reset_estimated_time': '預估時間',
  'operations.reset_order_tips':
    '一旦開始重置，所有未完成的訂單和網格策略將被取消。',
  'operations.reset_order_tips_btn2': '取消',
  'operations.claim_dg_rewards': '領取 DG 獎勵',
  'operations.claim_REBASE': '領取 REBASE',
  'operations.claim_REBASE_desc':
    'REBASE 將通過內部轉賬發送到您的 DeGate 餘額。',
  'operations.claim_REBASE_tips': '未領取的 REBASE 獎勵已納入收益計算。',
  'operations.view_yield_history': '查看收益歷史',
  'operations.cancel_orders_on_chain': '在鏈上取消訂單',
  'operations.chain_cancel_dca_text_N':
    '在此定投計劃中的<b>N筆訂單</b>將提交進行在鏈上的取消。',
  'operations.confirm_cancel_gas_AMOUNT_ETH':
    '請再次確認在鏈上取消的燃料費<b>金額ETH</b>。',
  'trade.confirm_order': '確認訂單',
  'trade.stop_limit_order': '止損限價',
  'trade.stop_limit_order_sell_desc_STOPPRICE_QUOTE_PRICE_BASEAMOUNT_BASE':
    '當報價達到_STOPPRICE_時，以_QUOTE_PRICE_的價格賣出_BASEAMOUNT_數量的_BASE_。',
  'trade.stop_price': '觸發價格',
  'trade.limit_price': '限價',
  'trade.market_price': '市價',
  'trade.total': '總計',
  'trade.pay': '支付',
  'trade.receive': '接收',
  'trade.hide_pair_confirm': '不再為此交易對顯示',
  'trade.pay_the_following_amount_to_place_order': '支付以下金額以進行下單：',
  'trade.flow_of_funds': '資金流動',
  'trade.flow_of_funds_tip2':
    '您的訂單已下單。訂單資金將支付至您的 DeGate 餘額，而非錢包餘額。',
  'trade.pay_to_place_order': '支付以下單',
  'trade.pay_xxx_USDC_to_place_order': '支付 xxx USDC 以下單',
  'trade.deposit_type': '方法',
  'trade.deposit_type_standard': '標準',
  'transfer.transfer_1_eth_ACCOUNT': '轉帳 1 ETH 至',
  'transfer.internal_transfer_address_new_tips':
    '該地址沒有之前的 DeGate 歷史記錄。轉帳至此地址將需要額外的燃氣費。',
  'transfer.address_placeholder': '輸入地址',
  'transfer.to_new_account_tips':
    '該地址沒有之前的 DeGate 歷史記錄。由於第一個資產接收將引發額外的鏈上數據使用，執行此內部轉賬將產生額外的燃氣費。',
  'transfer.confirm_internal_transfer': '確認內部轉帳',
  'transfer.internal_transfer_address_oneself_tips':
    '不支援向自己進行內部轉帳。',
  'transfer.transfer_max_err_XXX_USDT': '每次內部轉帳限額為 XXX USDT',
  'transfer.before': '之前',
  'transfer.after': '之後',
  'transfer.recipient_cex_warning':
    '警告：請勿轉帳至中心化交易所。您將會損失資金。',
  'withdraw.withdraw_max_tips': '系統限額已超出',
  'withdraw.address_placeholder': '輸入以太坊地址',
  'dca.confirm_dca_plan': '確認定投計劃',
  'dca.number_of_orders': '訂單數量',
  'dca.amount_per_order': '每筆訂單金額',
  'dca.time_scheduled': '計劃時間表',
  'dca.creating_the_plan': '正在創建計劃...',
  'dca.maximum_price': '最高價格',
  'dca.minimum_price': '最低價格',
  'dca.do_not_close': '請勿關閉或刷新此頁面。',
  'dca.frequency': '頻率',
  total_amount: '總金額',
  'dca.daily': '每天',
  'dca.weekly': '每週',
  'dca.every': '每',
  'airdrop.review_airdrop': '預覽空投',
  'airdrop.create_airdrop': '創建空投',
  'airdrop.recipients_number': '地址總數',
  'airdrop.airdrop_fee': '空投費',
  'airdrop.pay_airdrop_fee': '支付空投費',
  'airdrop.send_airdrop_token': '發送空投代幣',
  'airdrop.claim_airdrop': '領取空投',
  'airdrop.retrieve': '取回',
  'countdown.create_countdown_plan': '創建首發計劃',
  'countdown.countdown_display': '顯示倒計時',
  'countdown.max_30_days': '從現在起最多30天',
  'countdown.review_countdown_plan': '檢查首發計劃',
  'countdown.countdown_fee': '首發費',
  grid_slippage_over_2_tips_SLIPPAGE_QUOTE_BASE:
    '初始時系統將使用市價訂單將 QUOTE 的一部分兌換為 BASE，預估的滑點為 SLIPPAGE。',
  grid_slippage_over_5_tips_SLIPPAGE_QUOTE_BASE:
    '初始時系統將使用市價訂單將 QUOTE 的一部分兌換為 BASE，預估的滑點為 SLIPPAGE。建議以雙資產模式進行投資。',
  connected: '已連接',
  browser_wallet: '瀏覽錢包',
  Convert_to_YYY: '兌換為 YYY',
  sell_XXX_to_YYY: '您是否要以市價將您的 XXX 兌換為 YYY？',
  you_sell: '賣出',
  you_receive: '收到',
  est_slippage: '預估滑點',
  No: '否',
  closing_sell: '關倉賣出',
  connect_wallet: '連接錢包',
  Add: 'Add',
};
export default tw;
