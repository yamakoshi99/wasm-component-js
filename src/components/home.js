// ホームページコンポーネント
function HomeComponent() {
    return `
        ${NavbarComponent()}
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-md-10 text-center">
                    <h1 class="display-4 mb-4 text-success fw-bold fade-in">投資シミュレーター</h1>
                    <p class="lead mb-4 fade-in">リスクとリターンをシミュレーション</p>
                </div>
            </div>
            <div class="row mt-5 g-4">
                <div class="col-md-4">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title text-primary">
                                <i class="bi bi-lightbulb"></i> 基礎知識
                            </h5>
                            <p class="card-text">投資の基本をやさしく解説。初心者も安心！</p>
                            <div class="d-grid gap-2">
                                <a href="#knowledge" data-navigate="knowledge" class="btn btn-primary w-100">
                                    スタート
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title text-success">
                                <i class="bi bi-graph-up"></i> シミュレーター
                            </h5>
                            <p class="card-text">仮想マネーで投資体験。リスクとリターンを体感！</p>
                            <a href="#simulator" data-navigate="simulator" class="btn btn-success w-100">スタート</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title text-warning">
                                <i class="bi bi-question-circle"></i> クイズ
                            </h5>
                            <p class="card-text">クイズで知識をチェック！楽しく復習しよう。</p>
                            <a href="#quiz" data-navigate="quiz" class="btn btn-warning w-100 text-white">スタート</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title text-danger">
                                <i class="bi bi-pencil-square"></i> プランナー
                            </h5>
                            <p class="card-text">自分だけの投資プランを作成してみよう！</p>
                            <a href="#planner" data-navigate="planner" class="btn btn-danger w-100">スタート</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title text-info">
                                <i class="bi bi-controller"></i> ミニゲーム1
                            </h5>
                            <p class="card-text">おつかいマスターをプレイしよう！</p>
                            <a href="#minigame1" data-navigate="minigame1" class="btn btn-info w-100">スタート</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title text-info">
                                <i class="bi bi-sort-down"></i> ミニゲーム2
                            </h5>
                            <p class="card-text">マネーソーターをプレイしよう！</p>
                            <a href="#minigame2" data-navigate="minigame2" class="btn btn-info w-100">スタート</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
