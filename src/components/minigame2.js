// ミニゲーム2: マネーソーター
function MiniGame2Component() {
    setTimeout(() => {
        initializeMiniGame2();
    }, 100);

    return `
        ${NavbarComponent()}
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-md-10">
                    <div class="text-center mb-5">
                        <h1 class="display-5 text-info mb-3">
                            <i class="bi bi-sort-down"></i> マネーソーター
                        </h1>
                        <p class="lead">お金を正しい種類に分類して、お金の種類を覚えよう！</p>
                    </div>

                    <div class="row g-4">
                        <div class="col-md-3">
                            <div class="card">
                                <div class="card-header bg-info text-white">
                                    <h5 class="mb-0"><i class="bi bi-graph-up"></i> スコア</h5>
                                </div>
                                <div class="card-body text-center">
                                    <div class="mb-3">
                                        <label class="form-label">現在のスコア</label>
                                        <div class="h2 text-success" id="current-score">0</div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">正解数</label>
                                        <div class="h4 text-primary" id="correct-count">0</div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">残り時間</label>
                                        <div class="h4 text-warning" id="time-remaining">60</div>
                                    </div>
                                    <div>
                                        <label class="form-label">レベル</label>
                                        <div class="h4 text-info" id="current-level">1</div>
                                    </div>
                                </div>
                            </div>

                            <div class="card mt-3">
                                <div class="card-header bg-success text-white">
                                    <h6 class="mb-0"><i class="bi bi-info-circle"></i> 遊び方</h6>
                                </div>
                                <div class="card-body">
                                    <small>
                                        <ol>
                                            <li>画面に表示されるお金を見て正しいカテゴリのボタンをクリック</li>
                                            <li>時間内により多く正解しよう</li>
                                            <li>連続正解でボーナス</li>
                                            <li>間違えるとペナルティ</li>
                                        </ol>
                                    </small>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-9">
                            <div id="game-area">
                                <div class="card mb-3">
                                    <div class="card-body text-center">
                                        <div id="money-item" class="p-4 border rounded bg-light" style="min-height: 150px; display: flex; align-items: center; justify-content: center; flex-direction: column;">
                                            <div class="text-muted">ゲームを開始してください</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row g-3" id="categories">
                                    <div class="col-md-3">
                                        <button class="btn btn-outline-primary w-100 h-100 category-button"
                                                data-category="coin" onclick="selectCategory('coin')" style="min-height: 120px;">
                                            <div class="d-flex flex-column align-items-center">
                                                <i class="bi bi-coin display-4 text-primary mb-2"></i>
                                                <h6>硬貨</h6>
                                                <small class="text-muted">1円, 5円, 10円,<br>50円, 100円, 500円</small>
                                            </div>
                                        </button>
                                    </div>
                                    <div class="col-md-3">
                                        <button class="btn btn-outline-success w-100 h-100 category-button"
                                                data-category="bill" onclick="selectCategory('bill')" style="min-height: 120px;">
                                            <div class="d-flex flex-column align-items-center">
                                                <i class="bi bi-cash display-4 text-success mb-2"></i>
                                                <h6>紙幣</h6>
                                                <small class="text-muted">1000円, 2000円,<br>5000円, 10000円</small>
                                            </div>
                                        </button>
                                    </div>
                                    <div class="col-md-3">
                                        <button class="btn btn-outline-warning w-100 h-100 category-button"
                                                data-category="electronic" onclick="selectCategory('electronic')" style="min-height: 120px;">
                                            <div class="d-flex flex-column align-items-center">
                                                <i class="bi bi-credit-card display-4 text-warning mb-2"></i>
                                                <h6>電子マネー</h6>
                                                <small class="text-muted">ICカード, QRコード,<br>クレジットカード</small>
                                            </div>
                                        </button>
                                    </div>
                                    <div class="col-md-3">
                                        <button class="btn btn-outline-info w-100 h-100 category-button"
                                                data-category="digital" onclick="selectCategory('digital')" style="min-height: 120px;">
                                            <div class="d-flex flex-column align-items-center">
                                                <i class="bi bi-phone display-4 text-info mb-2"></i>
                                                <h6>デジタル</h6>
                                                <small class="text-muted">スマホ決済,<br>仮想通貨</small>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="text-center mt-4">
                                <button id="start-button" class="btn btn-info btn-lg me-3" onclick="startGame()">
                                    <i class="bi bi-play"></i> ゲーム開始
                                </button>
                                <button id="pause-button" class="btn btn-secondary" onclick="pauseGame()" style="display: none;">
                                    <i class="bi bi-pause"></i> 一時停止
                                </button>
                            </div>
                        </div>
                    </div>

                    <div id="game-result-2" class="mt-4" style="display: none;">
                        <div class="card">
                            <div class="card-body text-center">
                                <h3 class="text-info mb-4">
                                    <i class="bi bi-flag-checkered"></i> ゲーム終了！
                                </h3>
                                <div class="row justify-content-center">
                                    <div class="col-md-6">
                                        <div id="final-result"></div>
                                        <button class="btn btn-info mt-3" onclick="restartGame()">
                                            <i class="bi bi-arrow-clockwise"></i> もう一度プレイ
                                        </button>
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

// ゲーム2のデータ
const moneyTypes = [
    // 硬貨
    { name: '1円硬貨', category: 'coin', icon: 'bi-coin', color: 'text-secondary' },
    { name: '5円硬貨', category: 'coin', icon: 'bi-coin', color: 'text-warning' },
    { name: '10円硬貨', category: 'coin', icon: 'bi-coin', color: 'text-danger' },
    { name: '50円硬貨', category: 'coin', icon: 'bi-coin', color: 'text-light' },
    { name: '100円硬貨', category: 'coin', icon: 'bi-coin', color: 'text-light' },
    { name: '500円硬貨', category: 'coin', icon: 'bi-coin', color: 'text-warning' },

    // 紙幣
    { name: '1000円札', category: 'bill', icon: 'bi-cash', color: 'text-primary' },
    { name: '2000円札', category: 'bill', icon: 'bi-cash', color: 'text-success' },
    { name: '5000円札', category: 'bill', icon: 'bi-cash', color: 'text-info' },
    { name: '10000円札', category: 'bill', icon: 'bi-cash', color: 'text-warning' },

    // 電子マネー
    { name: 'Suica', category: 'electronic', icon: 'bi-credit-card', color: 'text-success' },
    { name: 'PASMO', category: 'electronic', icon: 'bi-credit-card', color: 'text-danger' },
    { name: 'nanaco', category: 'electronic', icon: 'bi-credit-card', color: 'text-warning' },
    { name: 'WAON', category: 'electronic', icon: 'bi-credit-card', color: 'text-info' },
    { name: 'クレジットカード', category: 'electronic', icon: 'bi-credit-card-2-front', color: 'text-dark' },

    // デジタル
    { name: 'PayPay', category: 'digital', icon: 'bi-phone', color: 'text-danger' },
    { name: 'LINE Pay', category: 'digital', icon: 'bi-phone', color: 'text-success' },
    { name: 'Apple Pay', category: 'digital', icon: 'bi-phone', color: 'text-dark' },
    { name: 'Google Pay', category: 'digital', icon: 'bi-phone', color: 'text-primary' },
    { name: 'ビットコイン', category: 'digital', icon: 'bi-currency-bitcoin', color: 'text-warning' }
];

// ゲーム2初期化
function initializeMiniGame2() {
    window.game2State = {
        score: 0,
        correctCount: 0,
        timeRemaining: 60,
        level: 1,
        isPlaying: false,
        isPaused: false,
        currentItem: null,
        timer: null,
        streak: 0
    };

    updateGame2Display();
}

// ゲーム2表示更新
function updateGame2Display() {
    if (!window.game2State) return;

    document.getElementById('current-score').textContent = window.game2State.score;
    document.getElementById('correct-count').textContent = window.game2State.correctCount;
    document.getElementById('time-remaining').textContent = window.game2State.timeRemaining;
    document.getElementById('current-level').textContent = window.game2State.level;
}

// ゲーム開始
function startGame() {
    window.game2State.isPlaying = true;
    window.game2State.isPaused = false;

    document.getElementById('start-button').style.display = 'none';
    document.getElementById('pause-button').style.display = 'inline-block';

    // タイマー開始
    window.game2State.timer = setInterval(() => {
        if (!window.game2State.isPaused) {
            window.game2State.timeRemaining--;
            updateGame2Display();

            if (window.game2State.timeRemaining <= 0) {
                endGame();
            }
        }
    }, 1000);

    // 最初のアイテム表示
    showNextMoney();
}

// ゲーム一時停止
function pauseGame() {
    window.game2State.isPaused = !window.game2State.isPaused;
    const button = document.getElementById('pause-button');

    if (window.game2State.isPaused) {
        button.innerHTML = '<i class="bi bi-play"></i> 再開';
    } else {
        button.innerHTML = '<i class="bi bi-pause"></i> 一時停止';
    }
}

// 次のお金を表示
function showNextMoney() {
    if (!window.game2State.isPlaying || window.game2State.timeRemaining <= 0) return;

    // レベルに応じて出現するアイテムを調整
    let availableItems = [...moneyTypes];
    if (window.game2State.level === 1) {
        availableItems = moneyTypes.filter(item =>
            item.category === 'coin' || item.category === 'bill'
        );
    } else if (window.game2State.level === 2) {
        availableItems = moneyTypes.filter(item =>
            item.category !== 'digital'
        );
    }

    const randomItem = availableItems[Math.floor(Math.random() * availableItems.length)];
    window.game2State.currentItem = randomItem;

    const moneyItemDiv = document.getElementById('money-item');
    moneyItemDiv.innerHTML = `
        <div class="money-display p-4 border rounded bg-white shadow-sm"
             style="min-width: 200px;">
            <i class="bi ${randomItem.icon} display-3 ${randomItem.color}"></i>
            <h4 class="mt-3 mb-2">${randomItem.name}</h4>
            <p class="text-muted mb-0">この支払い方法の種類を選んでください</p>
        </div>
    `;
}

// カテゴリ選択処理（ボタンクリック）
function selectCategory(selectedCategory) {
    if (!window.game2State.isPlaying || !window.game2State.currentItem) return;

    const correctCategory = window.game2State.currentItem.category;

    // 選択されたボタンを一時的にハイライト
    const buttons = document.querySelectorAll('.category-button');
    buttons.forEach(btn => btn.classList.remove('btn-success', 'btn-danger'));

    const selectedButton = document.querySelector(`[data-category="${selectedCategory}"]`);

    if (selectedCategory === correctCategory) {
        // 正解
        selectedButton.classList.add('btn-success');
        handleCorrectAnswer();
    } else {
        // 不正解
        selectedButton.classList.add('btn-danger');
        handleWrongAnswer();
    }

    // 0.5秒後にボタンの色をリセット
    setTimeout(() => {
        buttons.forEach(btn => {
            btn.classList.remove('btn-success', 'btn-danger');
            btn.className = btn.className.replace(/btn-outline-\w+/,
                btn.getAttribute('data-category') === 'coin' ? 'btn-outline-primary' :
                btn.getAttribute('data-category') === 'bill' ? 'btn-outline-success' :
                btn.getAttribute('data-category') === 'electronic' ? 'btn-outline-warning' :
                'btn-outline-info'
            );
        });
    }, 500);
}

// 正解処理
function handleCorrectAnswer() {
    window.game2State.correctCount++;
    window.game2State.streak++;

    // スコア計算（連続正解でボーナス）
    let points = 10 * window.game2State.level;
    if (window.game2State.streak >= 5) {
        points *= 2; // 5連続以上でボーナス
    }

    window.game2State.score += points;

    // レベルアップチェック
    if (window.game2State.correctCount % 10 === 0) {
        window.game2State.level++;
        showMessage('レベルアップ！', 'success');
    } else {
        showMessage(`+${points}点！`, 'success');
    }

    updateGame2Display();
    setTimeout(showNextMoney, 500);
}

// 不正解処理
function handleWrongAnswer() {
    window.game2State.streak = 0;
    window.game2State.score = Math.max(0, window.game2State.score - 5);

    showMessage('間違い！', 'danger');
    updateGame2Display();
    setTimeout(showNextMoney, 1000);
}

// メッセージ表示
function showMessage(text, type) {
    const moneyItemDiv = document.getElementById('money-item');
    moneyItemDiv.innerHTML = `
        <div class="alert alert-${type} mb-0">
            <h4>${text}</h4>
        </div>
    `;
}

// ゲーム終了
function endGame() {
    window.game2State.isPlaying = false;
    clearInterval(window.game2State.timer);

    document.getElementById('start-button').style.display = 'inline-block';
    document.getElementById('start-button').innerHTML = '<i class="bi bi-play"></i> ゲーム開始';
    document.getElementById('pause-button').style.display = 'none';

    showGame2Result();
}

// ゲーム結果表示
function showGame2Result() {
    const score = window.game2State.score;
    const correct = window.game2State.correctCount;
    const level = window.game2State.level;

    let rank, message;
    if (score >= 500) {
        rank = 'マネーマスター';
        message = '素晴らしい！お金の種類を完璧に理解していますね！';
    } else if (score >= 300) {
        rank = 'マネーエキスパート';
        message = 'とても良い成績です！お金について詳しくなりました。';
    } else if (score >= 150) {
        rank = 'マネービギナー';
        message = '良いスタートです！もう少し練習すればもっと上達します。';
    } else {
        rank = 'マネー見習い';
        message = 'お疲れ様でした！お金の種類を覚えて再チャレンジしましょう。';
    }

    document.getElementById('final-result').innerHTML = `
        <div class="mb-4">
            <h4 class="text-primary">${rank}</h4>
            <p class="lead">${message}</p>
        </div>
        <div class="row text-center">
            <div class="col-4">
                <div class="border rounded p-3">
                    <div class="h3 text-success">${score}</div>
                    <small>スコア</small>
                </div>
            </div>
            <div class="col-4">
                <div class="border rounded p-3">
                    <div class="h3 text-primary">${correct}</div>
                    <small>正解数</small>
                </div>
            </div>
            <div class="col-4">
                <div class="border rounded p-3">
                    <div class="h3 text-info">${level}</div>
                    <small>到達レベル</small>
                </div>
            </div>
        </div>
    `;

    document.getElementById('game-result-2').style.display = 'block';
}

// ゲーム再開始
function restartGame() {
    document.getElementById('game-result-2').style.display = 'none';
    initializeMiniGame2();
}

// グローバルスコープに関数を登録（HTMLのonclickから呼び出せるように）
window.selectCategory = selectCategory;
window.startGame = startGame;
window.pauseGame = pauseGame;
window.restartGame = restartGame;
