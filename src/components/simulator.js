// 投資シミュレーターコンポーネント
function SimulatorComponent() {
    setTimeout(() => {
        initializeSimulator();
    }, 100);

    return `
        ${NavbarComponent()}
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-md-10">
                    <div class="text-center mb-5">
                        <h1 class="display-5 text-success mb-3">
                            <i class="bi bi-graph-up"></i> 投資シミュレーター
                        </h1>
                        <p class="lead">仮想マネーで投資を体験してみましょう</p>
                    </div>

                    <div class="row g-4">
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-header bg-success text-white">
                                    <h5 class="mb-0"><i class="bi bi-wallet2"></i> 資産状況</h5>
                                </div>
                                <div class="card-body">
                                    <div class="mb-3">
                                        <label class="form-label">現金</label>
                                        <div class="h4 text-success" id="cash-amount">¥1,000,000</div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">投資額</label>
                                        <div class="h4 text-primary" id="investment-amount">¥0</div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">総資産</label>
                                        <div class="h4 text-dark" id="total-assets">¥1,000,000</div>
                                    </div>
                                    <div>
                                        <label class="form-label">損益</label>
                                        <div class="h4" id="profit-loss">¥0</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-header">
                                    <h5 class="mb-0"><i class="bi bi-graph-up-arrow"></i> 投資商品</h5>
                                </div>
                                <div class="card-body">
                                    <div class="row g-3">
                                        <div class="col-md-6">
                                            <div class="card border-primary">
                                                <div class="card-body">
                                                    <h6 class="card-title text-primary">株式A（安定型）</h6>
                                                    <p class="card-text small">リスク: 低 | 期待リターン: 3-5%</p>
                                                    <div class="mb-2">
                                                        <span class="small">現在価格: </span>
                                                        <span class="fw-bold" id="stock-a-price">¥100</span>
                                                    </div>
                                                    <div class="input-group input-group-sm mb-2">
                                                        <input type="number" class="form-control" id="stock-a-amount" placeholder="購入額" min="0" max="1000000">
                                                        <button class="btn btn-primary" onclick="buyStock('A')">購入</button>
                                                    </div>
                                                    <div class="small">
                                                        保有: <span id="stock-a-holdings">0</span>株
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="card border-warning">
                                                <div class="card-body">
                                                    <h6 class="card-title text-warning">株式B（成長型）</h6>
                                                    <p class="card-text small">リスク: 中 | 期待リターン: 5-10%</p>
                                                    <div class="mb-2">
                                                        <span class="small">現在価格: </span>
                                                        <span class="fw-bold" id="stock-b-price">¥200</span>
                                                    </div>
                                                    <div class="input-group input-group-sm mb-2">
                                                        <input type="number" class="form-control" id="stock-b-amount" placeholder="購入額" min="0" max="1000000">
                                                        <button class="btn btn-warning" onclick="buyStock('B')">購入</button>
                                                    </div>
                                                    <div class="small">
                                                        保有: <span id="stock-b-holdings">0</span>株
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="card border-danger">
                                                <div class="card-body">
                                                    <h6 class="card-title text-danger">株式C（ハイリスク）</h6>
                                                    <p class="card-text small">リスク: 高 | 期待リターン: -10~+20%</p>
                                                    <div class="mb-2">
                                                        <span class="small">現在価格: </span>
                                                        <span class="fw-bold" id="stock-c-price">¥500</span>
                                                    </div>
                                                    <div class="input-group input-group-sm mb-2">
                                                        <input type="number" class="form-control" id="stock-c-amount" placeholder="購入額" min="0" max="1000000">
                                                        <button class="btn btn-danger" onclick="buyStock('C')">購入</button>
                                                    </div>
                                                    <div class="small">
                                                        保有: <span id="stock-c-holdings">0</span>株
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="card border-info">
                                                <div class="card-body">
                                                    <h6 class="card-title text-info">債券（安全型）</h6>
                                                    <p class="card-text small">リスク: 極低 | 期待リターン: 1-3%</p>
                                                    <div class="mb-2">
                                                        <span class="small">現在価格: </span>
                                                        <span class="fw-bold" id="bond-price">¥1000</span>
                                                    </div>
                                                    <div class="input-group input-group-sm mb-2">
                                                        <input type="number" class="form-control" id="bond-amount" placeholder="購入額" min="0" max="1000000">
                                                        <button class="btn btn-info" onclick="buyBond()">購入</button>
                                                    </div>
                                                    <div class="small">
                                                        保有: <span id="bond-holdings">0</span>口
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="text-center mt-4">
                                        <button class="btn btn-success btn-lg me-3" onclick="simulateMarket()">
                                            <i class="bi bi-arrow-clockwise"></i> 市場を進める
                                        </button>
                                        <button class="btn btn-secondary" onclick="sellAll()">
                                            <i class="bi bi-cash-stack"></i> 全て売却
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-4">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <h5 class="mb-0"><i class="bi bi-clock-history"></i> 取引履歴</h5>
                                </div>
                                <div class="card-body">
                                    <div id="transaction-history" style="max-height: 200px; overflow-y: auto;">
                                        <p class="text-muted">取引履歴はここに表示されます</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// シミュレーター初期化関数
function initializeSimulator() {
    window.simulatorData = {
        cash: 1000000,
        stocks: {
            A: { holdings: 0, price: 100, basePrice: 100 },
            B: { holdings: 0, price: 200, basePrice: 200 },
            C: { holdings: 0, price: 500, basePrice: 500 }
        },
        bonds: { holdings: 0, price: 1000 },
        transactions: []
    };

    updateDisplay();
}

// 株式購入関数
function buyStock(type) {
    const amount = parseInt(document.getElementById(`stock-${type.toLowerCase()}-amount`).value);
    if (!amount || amount <= 0) return;

    const stock = window.simulatorData.stocks[type];
    const shares = Math.floor(amount / stock.price);
    const cost = shares * stock.price;

    if (cost > window.simulatorData.cash) {
        alert('現金が不足しています');
        return;
    }

    window.simulatorData.cash -= cost;
    stock.holdings += shares;

    addTransaction(`株式${type}を${shares}株購入 (¥${cost.toLocaleString()})`);
    updateDisplay();

    document.getElementById(`stock-${type.toLowerCase()}-amount`).value = '';
}

// 債券購入関数
function buyBond() {
    const amount = parseInt(document.getElementById('bond-amount').value);
    if (!amount || amount <= 0) return;

    const bonds = Math.floor(amount / window.simulatorData.bonds.price);
    const cost = bonds * window.simulatorData.bonds.price;

    if (cost > window.simulatorData.cash) {
        alert('現金が不足しています');
        return;
    }

    window.simulatorData.cash -= cost;
    window.simulatorData.bonds.holdings += bonds;

    addTransaction(`債券を${bonds}口購入 (¥${cost.toLocaleString()})`);
    updateDisplay();

    document.getElementById('bond-amount').value = '';
}

// 市場シミュレーション関数
function simulateMarket() {
    // 株価変動をシミュレート
    Object.keys(window.simulatorData.stocks).forEach(type => {
        const stock = window.simulatorData.stocks[type];
        let change;

        switch(type) {
            case 'A': // 安定型
                change = (Math.random() - 0.5) * 0.1; // ±5%
                break;
            case 'B': // 成長型
                change = (Math.random() - 0.4) * 0.2; // -8%~+12%
                break;
            case 'C': // ハイリスク
                change = (Math.random() - 0.5) * 0.4; // ±20%
                break;
        }

        stock.price = Math.round(stock.price * (1 + change));
        stock.price = Math.max(1, stock.price); // 最低価格は1円
    });

    addTransaction('市場が変動しました');
    updateDisplay();
}

// 全売却関数
function sellAll() {
    let totalSales = 0;

    // 株式売却
    Object.keys(window.simulatorData.stocks).forEach(type => {
        const stock = window.simulatorData.stocks[type];
        if (stock.holdings > 0) {
            const sales = stock.holdings * stock.price;
            totalSales += sales;
            addTransaction(`株式${type}を${stock.holdings}株売却 (¥${sales.toLocaleString()})`);
            stock.holdings = 0;
        }
    });

    // 債券売却
    if (window.simulatorData.bonds.holdings > 0) {
        const sales = window.simulatorData.bonds.holdings * window.simulatorData.bonds.price;
        totalSales += sales;
        addTransaction(`債券を${window.simulatorData.bonds.holdings}口売却 (¥${sales.toLocaleString()})`);
        window.simulatorData.bonds.holdings = 0;
    }

    window.simulatorData.cash += totalSales;
    updateDisplay();
}

// 表示更新関数
function updateDisplay() {
    if (!window.simulatorData) return;

    // 現金表示
    document.getElementById('cash-amount').textContent = `¥${window.simulatorData.cash.toLocaleString()}`;

    // 投資額計算
    let investmentValue = 0;
    Object.keys(window.simulatorData.stocks).forEach(type => {
        const stock = window.simulatorData.stocks[type];
        investmentValue += stock.holdings * stock.price;

        // 株価と保有数更新
        document.getElementById(`stock-${type.toLowerCase()}-price`).textContent = `¥${stock.price}`;
        document.getElementById(`stock-${type.toLowerCase()}-holdings`).textContent = stock.holdings;
    });

    investmentValue += window.simulatorData.bonds.holdings * window.simulatorData.bonds.price;
    document.getElementById('bond-holdings').textContent = window.simulatorData.bonds.holdings;

    document.getElementById('investment-amount').textContent = `¥${investmentValue.toLocaleString()}`;

    // 総資産
    const totalAssets = window.simulatorData.cash + investmentValue;
    document.getElementById('total-assets').textContent = `¥${totalAssets.toLocaleString()}`;

    // 損益
    const profitLoss = totalAssets - 1000000;
    const profitLossElement = document.getElementById('profit-loss');
    profitLossElement.textContent = `¥${profitLoss.toLocaleString()}`;
    profitLossElement.className = `h4 ${profitLoss >= 0 ? 'text-success' : 'text-danger'}`;
}

// 取引履歴追加関数
function addTransaction(text) {
    if (!window.simulatorData) return;

    const timestamp = new Date().toLocaleTimeString();
    window.simulatorData.transactions.unshift(`${timestamp}: ${text}`);

    // 最新10件のみ保持
    if (window.simulatorData.transactions.length > 10) {
        window.simulatorData.transactions = window.simulatorData.transactions.slice(0, 10);
    }

    const historyElement = document.getElementById('transaction-history');
    if (historyElement) {
        historyElement.innerHTML = window.simulatorData.transactions
            .map(transaction => `<div class="small mb-1">${transaction}</div>`)
            .join('');
    }
}
