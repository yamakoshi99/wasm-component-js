// ミニゲーム1: おつかいマスター
function MiniGame1Component() {
    setTimeout(() => {
        initializeMiniGame1();
    }, 100);

    return `
        ${NavbarComponent()}
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="text-center mb-5">
                        <h1 class="display-5 text-info mb-3">
                            <i class="bi bi-cart"></i> おつかいマスター
                        </h1>
                        <p class="lead">予算内で必要な物を買い物して、お金の使い方を学ぼう！</p>
                    </div>

                    <div class="row g-4">
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-header bg-info text-white">
                                    <h5 class="mb-0"><i class="bi bi-wallet"></i> ステータス</h5>
                                </div>
                                <div class="card-body">
                                    <div class="mb-3">
                                        <label class="form-label">予算</label>
                                        <div class="h4 text-success" id="budget-amount">¥1,000</div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">使用額</label>
                                        <div class="h4 text-danger" id="spent-amount">¥0</div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">残高</label>
                                        <div class="h4 text-primary" id="remaining-amount">¥1,000</div>
                                    </div>
                                    <div>
                                        <label class="form-label">ミッション進行</label>
                                        <div class="progress">
                                            <div class="progress-bar bg-info" id="mission-progress" style="width: 0%"></div>
                                        </div>
                                        <small id="mission-text">ミッションをクリアしよう！</small>
                                    </div>
                                </div>
                            </div>

                            <div class="card mt-3">
                                <div class="card-header bg-warning">
                                    <h6 class="mb-0"><i class="bi bi-list-check"></i> 今日のミッション</h6>
                                </div>
                                <div class="card-body">
                                    <div id="mission-list">
                                        <!-- ミッションリストがここに表示されます -->
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-header">
                                    <h5 class="mb-0"><i class="bi bi-shop"></i> お店</h5>
                                </div>
                                <div class="card-body">
                                    <div class="row g-3" id="shop-items">
                                        <!-- 商品がここに表示されます -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-4">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <h5 class="mb-0"><i class="bi bi-bag"></i> 購入した商品</h5>
                                </div>
                                <div class="card-body">
                                    <div id="purchased-items" class="d-flex flex-wrap gap-2">
                                        <p class="text-muted">まだ何も購入していません</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="game-result" class="mt-4" style="display: none;">
                        <div class="card">
                            <div class="card-body text-center">
                                <h3 id="result-title" class="mb-4">ゲーム終了！</h3>
                                <div id="result-content"></div>
                                <button class="btn btn-info mt-3" onclick="startNewGame()">
                                    <i class="bi bi-arrow-clockwise"></i> 新しいゲームを始める
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ゲームデータ
const gameData = {
    budget: 1000,
    missions: [
        { id: 1, item: 'パン', completed: false, required: true },
        { id: 2, item: '牛乳', completed: false, required: true },
        { id: 3, item: '卵', completed: false, required: true }
    ],
    items: [
        { id: 1, name: 'パン', price: 200, category: 'food', required: true },
        { id: 2, name: '牛乳', price: 150, category: 'food', required: true },
        { id: 3, name: '卵', price: 250, category: 'food', required: true },
        { id: 4, name: 'チョコレート', price: 300, category: 'snack', required: false },
        { id: 5, name: 'ジュース', price: 120, category: 'drink', required: false },
        { id: 6, name: 'アイス', price: 180, category: 'snack', required: false },
        { id: 7, name: 'お菓子', price: 250, category: 'snack', required: false },
        { id: 8, name: 'バナナ', price: 100, category: 'fruit', required: false }
    ]
};

// ゲーム初期化
function initializeMiniGame1() {
    window.gameState = {
        budget: gameData.budget,
        spent: 0,
        purchased: [],
        missions: [...gameData.missions],
        gameEnded: false
    };

    updateGameDisplay();
    displayShopItems();
    displayMissions();
}

// ゲーム表示更新
function updateGameDisplay() {
    const remaining = window.gameState.budget - window.gameState.spent;

    document.getElementById('budget-amount').textContent = `¥${window.gameState.budget.toLocaleString()}`;
    document.getElementById('spent-amount').textContent = `¥${window.gameState.spent.toLocaleString()}`;
    document.getElementById('remaining-amount').textContent = `¥${remaining.toLocaleString()}`;

    // 残高の色を変更
    const remainingElement = document.getElementById('remaining-amount');
    if (remaining < 0) {
        remainingElement.className = 'h4 text-danger';
    } else if (remaining < 200) {
        remainingElement.className = 'h4 text-warning';
    } else {
        remainingElement.className = 'h4 text-primary';
    }

    // ミッション進行度
    const completedMissions = window.gameState.missions.filter(m => m.completed).length;
    const totalMissions = window.gameState.missions.length;
    const progress = (completedMissions / totalMissions) * 100;

    document.getElementById('mission-progress').style.width = `${progress}%`;
    document.getElementById('mission-text').textContent =
        `${completedMissions}/${totalMissions} 完了`;
}

// 商品表示
function displayShopItems() {
    const shopContainer = document.getElementById('shop-items');
    shopContainer.innerHTML = gameData.items.map(item => {
        const purchased = window.gameState.purchased.find(p => p.id === item.id);
        const canAfford = (window.gameState.budget - window.gameState.spent) >= item.price;

        return `
            <div class="col-md-6 col-lg-4">
                <div class="card ${item.required ? 'border-warning' : ''} h-100">
                    <div class="card-body text-center">
                        <h6 class="card-title">
                            ${item.name}
                            ${item.required ? '<i class="bi bi-star-fill text-warning"></i>' : ''}
                        </h6>
                        <p class="card-text">
                            <span class="h5 text-success">¥${item.price}</span>
                        </p>
                        ${purchased ?
                            '<button class="btn btn-secondary btn-sm" disabled>購入済み</button>' :
                            `<button class="btn btn-${canAfford ? 'primary' : 'secondary'} btn-sm"
                                ${canAfford ? `onclick="buyItem(${item.id})"` : 'disabled'}>
                                ${canAfford ? '購入' : '予算不足'}
                            </button>`
                        }
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ミッション表示
function displayMissions() {
    const missionsContainer = document.getElementById('mission-list');
    missionsContainer.innerHTML = window.gameState.missions.map(mission => `
        <div class="d-flex justify-content-between align-items-center mb-2">
            <span class="${mission.completed ? 'text-decoration-line-through text-muted' : ''}">
                ${mission.item}
            </span>
            <i class="bi bi-${mission.completed ? 'check-circle text-success' : 'circle text-muted'}"></i>
        </div>
    `).join('');
}

// 商品購入
function buyItem(itemId) {
    if (window.gameState.gameEnded) return;

    const item = gameData.items.find(i => i.id === itemId);
    const alreadyPurchased = window.gameState.purchased.find(p => p.id === itemId);

    if (alreadyPurchased) {
        alert('この商品は既に購入済みです');
        return;
    }

    const remaining = window.gameState.budget - window.gameState.spent;
    if (item.price > remaining) {
        alert('予算が不足しています');
        return;
    }

    // 購入処理
    window.gameState.spent += item.price;
    window.gameState.purchased.push(item);

    // ミッション更新
    const mission = window.gameState.missions.find(m => m.item === item.name);
    if (mission) {
        mission.completed = true;
    }

    updateGameDisplay();
    displayShopItems();
    displayMissions();
    displayPurchasedItems();

    // ゲーム終了チェック
    checkGameEnd();
}

// 購入済み商品表示
function displayPurchasedItems() {
    const container = document.getElementById('purchased-items');

    if (window.gameState.purchased.length === 0) {
        container.innerHTML = '<p class="text-muted">まだ何も購入していません</p>';
        return;
    }

    container.innerHTML = window.gameState.purchased.map(item => `
        <span class="badge bg-primary fs-6 me-2 mb-2">
            ${item.name} (¥${item.price})
        </span>
    `).join('');
}

// ゲーム終了チェック
function checkGameEnd() {
    const requiredMissions = window.gameState.missions.filter(m => m.required);
    const completedRequired = requiredMissions.filter(m => m.completed);
    const remaining = window.gameState.budget - window.gameState.spent;

    if (completedRequired.length === requiredMissions.length || remaining < 0) {
        window.gameState.gameEnded = true;
        showGameResult();
    }
}

// ゲーム結果表示
function showGameResult() {
    const requiredMissions = window.gameState.missions.filter(m => m.required);
    const completedRequired = requiredMissions.filter(m => m.completed);
    const remaining = window.gameState.budget - window.gameState.spent;

    let title, content, resultClass;

    if (remaining < 0) {
        title = '予算オーバー！';
        content = `
            <div class="alert alert-danger">
                <i class="bi bi-exclamation-triangle"></i>
                予算を¥${Math.abs(remaining).toLocaleString()}オーバーしてしまいました。<br>
                お買い物をする時は予算をしっかり管理しましょう。
            </div>
        `;
        resultClass = 'text-danger';
    } else if (completedRequired.length === requiredMissions.length) {
        title = 'ミッションクリア！';
        content = `
            <div class="alert alert-success">
                <i class="bi bi-trophy"></i>
                素晴らしい！必要な物をすべて買えました。<br>
                残金: ¥${remaining.toLocaleString()}<br>
                賢いお買い物ができましたね！
            </div>
        `;
        resultClass = 'text-success';
    }

    // 購入した商品のリスト
    content += `
        <h6>購入した商品:</h6>
        <ul class="list-unstyled">
            ${window.gameState.purchased.map(item =>
                `<li><i class="bi bi-check"></i> ${item.name} - ¥${item.price}</li>`
            ).join('')}
        </ul>
        <p><strong>合計: ¥${window.gameState.spent.toLocaleString()}</strong></p>
    `;

    document.getElementById('result-title').textContent = title;
    document.getElementById('result-title').className = `mb-4 ${resultClass}`;
    document.getElementById('result-content').innerHTML = content;
    document.getElementById('game-result').style.display = 'block';
}

// 新しいゲーム開始
function startNewGame() {
    document.getElementById('game-result').style.display = 'none';
    initializeMiniGame1();
}
