// ナビゲーションバーコンポーネント
function NavbarComponent() {
    return `
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
            <div class="container">
                <a class="navbar-brand" href="#" data-navigate="">
                    <i class="bi bi-graph-up-arrow me-2"></i>
                    投資シミュレーター
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#" data-navigate="">ホーム</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#knowledge" data-navigate="knowledge">基礎知識</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#simulator" data-navigate="simulator">シミュレーター</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#quiz" data-navigate="quiz">クイズ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#planner" data-navigate="planner">プランナー</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
}
