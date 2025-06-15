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
                                    <div class="mb-3">
                                        <label class="form-label">損益</label>
                                        <div class="h4" id="profit-loss">¥0</div>
                                    </div>
                                    <div>
                                        <label class="form-label">市場状態</label>
                                        <div class="small">
                                            <span id="market-status" class="badge bg-secondary">手動モード</span>
                                        </div>
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
                                        <button class="btn btn-warning me-3" id="auto-mode-btn" onclick="toggleAutoMode()">
                                            <i class="bi bi-play-circle"></i> 自動モード開始
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
                        <div class="col-md-6">
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

                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-header">
                                    <h5 class="mb-0"><i class="bi bi-pie-chart"></i> ポートフォリオ構成</h5>
                                </div>
                                <div class="card-body">
                                    <div style="position: relative; height: 250px;">
                                        <canvas id="portfolioChart"></canvas>
                                    </div>
                                    <div id="portfolio-legend" class="mt-3">
                                        <!-- 凡例がここに表示されます -->
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
    try {
        // 既存の自動モードタイマーをクリア
        if (window.simulatorData && window.simulatorData.autoTimer) {
            clearInterval(window.simulatorData.autoTimer);
        }

        // 既存のチャートを破棄（Chart.jsインスタンスの場合のみ）
        if (window.portfolioChart && typeof window.portfolioChart.destroy === 'function') {
            window.portfolioChart.destroy();
        }
        window.portfolioChart = null;

        window.simulatorData = {
            cash: 1000000,
            stocks: {
                A: { holdings: 0, price: 100, basePrice: 100 },
                B: { holdings: 0, price: 200, basePrice: 200 },
                C: { holdings: 0, price: 500, basePrice: 500 }
            },
            bonds: { holdings: 0, price: 1000 },
            transactions: [],
            autoMode: false,
            autoTimer: null
        };

        updateDisplay();

        // Chart.jsが読み込まれてからチャートを初期化
        if (typeof Chart !== 'undefined') {
            // DOM要素が完全に準備されるまで少し待つ
            setTimeout(() => {
                initializePortfolioChart();
            }, 200);
        } else {
            console.warn('Chart.js is not loaded. Portfolio chart will not be available.');
            // Chart.jsが後で読み込まれる可能性があるので、定期的にチェック
            let checkCount = 0;
            const checkChart = setInterval(() => {
                checkCount++;
                if (typeof Chart !== 'undefined') {
                    clearInterval(checkChart);
                    setTimeout(() => {
                        initializePortfolioChart();
                    }, 100);
                } else if (checkCount > 20) { // 10秒後にタイムアウト
                    clearInterval(checkChart);
                    console.warn('Chart.js loading timeout. Chart functionality will not be available.');
                }
            }, 500);
        }
    } catch (error) {
        console.error('Error initializing simulator:', error);
    }
}

// 株式購入関数
function buyStock(type) {
    if (!window.simulatorData) {
        alert('シミュレーターが初期化されていません');
        return;
    }

    const amount = parseInt(document.getElementById(`stock-${type.toLowerCase()}-amount`).value);
    if (!amount || amount <= 0) {
        alert('有効な金額を入力してください');
        return;
    }

    const stock = window.simulatorData.stocks[type];
    if (!stock) {
        alert('無効な株式タイプです');
        return;
    }

    const shares = Math.floor(amount / stock.price);
    const cost = shares * stock.price;

    if (cost > window.simulatorData.cash) {
        alert('現金が不足しています');
        return;
    }

    if (shares === 0) {
        alert('購入額が少なすぎます');
        return;
    }

    window.simulatorData.cash -= cost;
    stock.holdings += shares;

    addTransaction(`株式${type}を${shares}株購入 (¥${cost.toLocaleString()})`);
    updateDisplay();

    const inputElement = document.getElementById(`stock-${type.toLowerCase()}-amount`);
    if (inputElement) {
        inputElement.value = '';
    }
}

// 債券購入関数
function buyBond() {
    if (!window.simulatorData) {
        alert('シミュレーターが初期化されていません');
        return;
    }

    const amount = parseInt(document.getElementById('bond-amount').value);
    if (!amount || amount <= 0) {
        alert('有効な金額を入力してください');
        return;
    }

    const bonds = Math.floor(amount / window.simulatorData.bonds.price);
    const cost = bonds * window.simulatorData.bonds.price;

    if (cost > window.simulatorData.cash) {
        alert('現金が不足しています');
        return;
    }

    if (bonds === 0) {
        alert('購入額が少なすぎます');
        return;
    }

    window.simulatorData.cash -= cost;
    window.simulatorData.bonds.holdings += bonds;

    addTransaction(`債券を${bonds}口購入 (¥${cost.toLocaleString()})`);
    updateDisplay();

    const inputElement = document.getElementById('bond-amount');
    if (inputElement) {
        inputElement.value = '';
    }
}

// 市場シミュレーション関数
function simulateMarket() {
    if (!window.simulatorData) {
        alert('シミュレーターが初期化されていません');
        return;
    }

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

    // 市場変動の履歴は出力しない
    updateDisplay();
}

// 全売却関数
function sellAll() {
    if (!window.simulatorData) {
        alert('シミュレーターが初期化されていません');
        return;
    }

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

    if (totalSales > 0) {
        window.simulatorData.cash += totalSales;
        addTransaction(`全ての投資商品を売却しました (合計: ¥${totalSales.toLocaleString()})`);
    } else {
        addTransaction('売却する投資商品がありません');
    }

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
        const priceElement = document.getElementById(`stock-${type.toLowerCase()}-price`);
        const holdingsElement = document.getElementById(`stock-${type.toLowerCase()}-holdings`);

        if (priceElement) priceElement.textContent = `¥${stock.price}`;
        if (holdingsElement) holdingsElement.textContent = stock.holdings;
    });

    investmentValue += window.simulatorData.bonds.holdings * window.simulatorData.bonds.price;

    const bondHoldingsElement = document.getElementById('bond-holdings');
    if (bondHoldingsElement) {
        bondHoldingsElement.textContent = window.simulatorData.bonds.holdings;
    }

    const investmentElement = document.getElementById('investment-amount');
    if (investmentElement) {
        investmentElement.textContent = `¥${investmentValue.toLocaleString()}`;
    }

    // 総資産
    const totalAssets = window.simulatorData.cash + investmentValue;
    const totalAssetsElement = document.getElementById('total-assets');
    if (totalAssetsElement) {
        totalAssetsElement.textContent = `¥${totalAssets.toLocaleString()}`;
    }

    // 損益
    const profitLoss = totalAssets - 1000000;
    const profitLossElement = document.getElementById('profit-loss');
    if (profitLossElement) {
        profitLossElement.textContent = `¥${profitLoss.toLocaleString()}`;
        profitLossElement.className = `h4 ${profitLoss >= 0 ? 'text-success' : 'text-danger'}`;
    }

    // 市場状態表示
    const marketStatusElement = document.getElementById('market-status');
    if (marketStatusElement) {
        if (window.simulatorData.autoMode) {
            marketStatusElement.textContent = '自動モード（5秒更新）';
            marketStatusElement.className = 'badge bg-success';
        } else {
            marketStatusElement.textContent = '手動モード';
            marketStatusElement.className = 'badge bg-secondary';
        }
    }

    // ポートフォリオチャートを更新（Chart.jsが利用可能な場合のみ）
    if (typeof Chart !== 'undefined' && window.portfolioChart) {
        updatePortfolioChart();
    }
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

// 自動モード切り替え関数
function toggleAutoMode() {
    if (!window.simulatorData) {
        alert('シミュレーターが初期化されていません');
        return;
    }

    const autoBtn = document.getElementById('auto-mode-btn');
    if (!autoBtn) {
        console.error('自動モードボタンが見つかりません');
        return;
    }

    if (window.simulatorData.autoMode) {
        // 自動モードを停止
        window.simulatorData.autoMode = false;
        if (window.simulatorData.autoTimer) {
            clearInterval(window.simulatorData.autoTimer);
            window.simulatorData.autoTimer = null;
        }
        autoBtn.innerHTML = '<i class="bi bi-play-circle"></i> 自動モード開始';
        autoBtn.className = 'btn btn-warning me-3';
        addTransaction('自動モードを停止しました');
    } else {
        // 自動モードを開始
        window.simulatorData.autoMode = true;
        window.simulatorData.autoTimer = setInterval(() => {
            simulateMarket();
        }, 5000); // 5秒ごとに実行
        autoBtn.innerHTML = '<i class="bi bi-pause-circle"></i> 自動モード停止';
        autoBtn.className = 'btn btn-danger me-3';
        addTransaction('自動モードを開始しました（5秒ごとに市場が更新されます）');
    }

    // 表示を更新
    updateDisplay();
}

// ポートフォリオチャート初期化
function initializePortfolioChart() {
    try {
        console.log('Initializing portfolio chart...');

        const ctx = document.getElementById('portfolioChart');
        if (!ctx) {
            console.warn('Portfolio chart canvas not found');
            return;
        }

        if (typeof Chart === 'undefined') {
            console.warn('Chart.js is not loaded');
            return;
        }

        console.log('Chart.js is available, creating chart...');

        // 既存のチャートインスタンスがあれば破棄
        if (window.portfolioChart && typeof window.portfolioChart.destroy === 'function') {
            window.portfolioChart.destroy();
        }

        window.portfolioChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['株式A（安定型）', '株式B（成長型）', '株式C（ハイリスク）', '債券（安全型）'],
                datasets: [{
                    data: [0, 0, 0, 0], // 初期は投資なし
                    backgroundColor: [
                        '#007bff', // 株式A - 青
                        '#ffc107', // 株式B - 黄
                        '#dc3545', // 株式C - 赤
                        '#17a2b8'  // 債券 - 水色
                    ],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    animateRotate: true,
                    animateScale: true,
                    duration: 1000
                },
                plugins: {
                    legend: {
                        display: false // カスタム凡例を使用
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
                                return `${label}: ${percentage}% (¥${value.toLocaleString()})`;
                            }
                        }
                    }
                },
                cutout: '50%' // ドーナツの内側の空洞サイズ
            }
        });

        console.log('Chart created successfully');
        updatePortfolioChart();
    } catch (error) {
        console.error('Error initializing portfolio chart:', error);
        // チャートが作成できなくても他の機能は動作するようにする
        window.portfolioChart = null;
    }
}

// ポートフォリオチャート更新
function updatePortfolioChart() {
    try {
        if (!window.portfolioChart || !window.simulatorData) {
            console.log('Chart or simulator data not available for update');
            return;
        }

        // Chart.jsインスタンスが有効か確認
        if (typeof window.portfolioChart.update !== 'function') {
            console.warn('Invalid chart instance');
            return;
        }

        const data = window.simulatorData;

        // 各投資商品の価値を計算（現金は除外）
        const stockAValue = data.stocks.A.holdings * data.stocks.A.price;
        const stockBValue = data.stocks.B.holdings * data.stocks.B.price;
        const stockCValue = data.stocks.C.holdings * data.stocks.C.price;
        const bondValue = data.bonds.holdings * data.bonds.price;

        const totalInvestmentValue = stockAValue + stockBValue + stockCValue + bondValue;

        // チャートデータを更新（現金を除外）
        window.portfolioChart.data.datasets[0].data = [
            stockAValue,
            stockBValue,
            stockCValue,
            bondValue
        ];

        window.portfolioChart.update('active'); // アニメーション付きで更新

        // カスタム凡例を更新（現金を除外）
        updatePortfolioLegend(stockAValue, stockBValue, stockCValue, bondValue, totalInvestmentValue);
    } catch (error) {
        console.error('Error updating portfolio chart:', error);
    }
}

// ポートフォリオ凡例更新
function updatePortfolioLegend(stockA, stockB, stockC, bond, totalInvestmentValue) {
    const legendElement = document.getElementById('portfolio-legend');
    if (!legendElement) return;

    const investmentAssets = [
        { name: '株式A（安定型）', value: stockA, color: '#007bff' },
        { name: '株式B（成長型）', value: stockB, color: '#ffc107' },
        { name: '株式C（ハイリスク）', value: stockC, color: '#dc3545' },
        { name: '債券（安全型）', value: bond, color: '#17a2b8' }
    ];

    // 0より大きい投資商品のみ表示
    const visibleAssets = investmentAssets.filter(asset => asset.value > 0);

    if (visibleAssets.length === 0) {
        legendElement.innerHTML = '<p class="text-muted small">投資商品を購入すると構成比が表示されます</p>';
        return;
    }

    legendElement.innerHTML = visibleAssets.map(asset => {
        const percentage = totalInvestmentValue > 0 ? ((asset.value / totalInvestmentValue) * 100).toFixed(1) : 0;
        return `
            <div class="d-flex justify-content-between align-items-center mb-1">
                <div class="d-flex align-items-center">
                    <div style="width: 12px; height: 12px; background-color: ${asset.color}; border-radius: 50%; margin-right: 8px;"></div>
                    <small>${asset.name}</small>
                </div>
                <div class="text-end">
                    <small class="fw-bold">${percentage}%</small>
                    <br>
                    <small class="text-muted">¥${asset.value.toLocaleString()}</small>
                </div>
            </div>
        `;
    }).join('');
}

// グローバルスコープに関数を登録（HTMLのonclickから呼び出せるように）
window.buyStock = buyStock;
window.buyBond = buyBond;
window.simulateMarket = simulateMarket;
window.sellAll = sellAll;
window.toggleAutoMode = toggleAutoMode;
