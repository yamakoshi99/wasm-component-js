// 基礎知識コンポーネント
function KnowledgeComponent() {
    return `
        ${NavbarComponent()}
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="text-center mb-5">
                        <h1 class="display-5 text-primary mb-3">
                            <i class="bi bi-lightbulb"></i> 投資の基礎知識
                        </h1>
                        <p class="lead">投資を始める前に知っておきたい基本的な知識を学びましょう</p>
                    </div>

                    <div class="row g-4">
                        <div class="col-md-6">
                            <div class="card h-100">
                                <div class="card-header bg-primary text-white">
                                    <h5 class="mb-0"><i class="bi bi-info-circle"></i> 投資とは？</h5>
                                </div>
                                <div class="card-body">
                                    <p>投資とは、将来の利益を期待してお金を運用することです。</p>
                                    <ul>
                                        <li>株式投資</li>
                                        <li>債券投資</li>
                                        <li>投資信託</li>
                                        <li>不動産投資</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card h-100">
                                <div class="card-header bg-success text-white">
                                    <h5 class="mb-0"><i class="bi bi-arrow-up-right"></i> リターンとは？</h5>
                                </div>
                                <div class="card-body">
                                    <p>投資から得られる利益のことです。</p>
                                    <ul>
                                        <li>キャピタルゲイン（売却益）</li>
                                        <li>インカムゲイン（配当・利息）</li>
                                        <li>複利効果</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card h-100">
                                <div class="card-header bg-warning text-white">
                                    <h5 class="mb-0"><i class="bi bi-exclamation-triangle"></i> リスクとは？</h5>
                                </div>
                                <div class="card-body">
                                    <p>投資における損失の可能性のことです。</p>
                                    <ul>
                                        <li>価格変動リスク</li>
                                        <li>信用リスク</li>
                                        <li>流動性リスク</li>
                                        <li>インフレリスク</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card h-100">
                                <div class="card-header bg-info text-white">
                                    <h5 class="mb-0"><i class="bi bi-shield-check"></i> 分散投資</h5>
                                </div>
                                <div class="card-body">
                                    <p>リスクを減らすための重要な手法です。</p>
                                    <ul>
                                        <li>異なる資産クラスに投資</li>
                                        <li>地域の分散</li>
                                        <li>時間の分散（積立投資）</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="text-center mt-5">
                        <a href="#quiz" data-navigate="quiz" class="btn btn-warning btn-lg me-3">
                            <i class="bi bi-question-circle"></i> クイズで理解度チェック
                        </a>
                        <a href="#simulator" data-navigate="simulator" class="btn btn-success btn-lg">
                            <i class="bi bi-graph-up"></i> シミュレーターを試す
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}
