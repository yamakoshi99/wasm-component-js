// 投資プランナーコンポーネント
function PlannerComponent() {
    setTimeout(() => {
        initializePlanner();
    }, 100);

    return `
        ${NavbarComponent()}
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-md-10">
                    <div class="text-center mb-5">
                        <h1 class="display-5 text-danger mb-3">
                            <i class="bi bi-pencil-square"></i> 投資プランナー
                        </h1>
                        <p class="lead">あなたに最適な投資プランを作成しましょう</p>
                    </div>

                    <div class="row g-4">
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-header bg-danger text-white">
                                    <h5 class="mb-0"><i class="bi bi-person"></i> 基本情報</h5>
                                </div>
                                <div class="card-body">
                                    <div class="mb-3">
                                        <label class="form-label">年齢</label>
                                        <select class="form-select" id="age-select">
                                            <option value="">選択してください</option>
                                            <option value="20s">20代</option>
                                            <option value="30s">30代</option>
                                            <option value="40s">40代</option>
                                            <option value="50s">50代</option>
                                            <option value="60s">60代以上</option>
                                        </select>
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label">投資経験</label>
                                        <select class="form-select" id="experience-select">
                                            <option value="">選択してください</option>
                                            <option value="beginner">初心者</option>
                                            <option value="intermediate">少し経験あり</option>
                                            <option value="advanced">経験豊富</option>
                                        </select>
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label">投資目的</label>
                                        <select class="form-select" id="purpose-select">
                                            <option value="">選択してください</option>
                                            <option value="retirement">老後資金</option>
                                            <option value="education">教育資金</option>
                                            <option value="house">住宅購入</option>
                                            <option value="general">資産形成</option>
                                        </select>
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label">投資期間</label>
                                        <select class="form-select" id="period-select">
                                            <option value="">選択してください</option>
                                            <option value="short">1-3年</option>
                                            <option value="medium">3-10年</option>
                                            <option value="long">10年以上</option>
                                        </select>
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label">月々の投資可能額</label>
                                        <select class="form-select" id="amount-select">
                                            <option value="">選択してください</option>
                                            <option value="low">1-3万円</option>
                                            <option value="medium">3-10万円</option>
                                            <option value="high">10万円以上</option>
                                        </select>
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label">リスク許容度</label>
                                        <select class="form-select" id="risk-select">
                                            <option value="">選択してください</option>
                                            <option value="low">安全重視</option>
                                            <option value="medium">バランス重視</option>
                                            <option value="high">成長重視</option>
                                        </select>
                                    </div>

                                    <button class="btn btn-danger w-100" onclick="generatePlan()">
                                        <i class="bi bi-magic"></i> プランを作成
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div id="plan-result" style="display: none;">
                                <div class="card">
                                    <div class="card-header bg-success text-white">
                                        <h5 class="mb-0"><i class="bi bi-clipboard-check"></i> あなたの投資プラン</h5>
                                    </div>
                                    <div class="card-body">
                                        <div id="plan-content">
                                            <!-- プラン内容がここに表示されます -->
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="plan-placeholder" class="card">
                                <div class="card-body text-center text-muted">
                                    <i class="bi bi-arrow-left display-4 mb-3"></i>
                                    <p>左側の項目を入力して、<br>「プランを作成」ボタンを押してください</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="detailed-plan" class="mt-4" style="display: none;">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="mb-0"><i class="bi bi-pie-chart"></i> 詳細な資産配分</h5>
                            </div>
                            <div class="card-body">
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <h6>推奨ポートフォリオ</h6>
                                        <div id="portfolio-breakdown">
                                            <!-- ポートフォリオの詳細がここに表示されます -->
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <h6>投資のステップ</h6>
                                        <div id="investment-steps">
                                            <!-- 投資ステップがここに表示されます -->
                                        </div>
                                    </div>
                                </div>

                                <div class="text-center mt-4">
                                    <button class="btn btn-primary me-3" onclick="savePlan()">
                                        <i class="bi bi-download"></i> プランを保存
                                    </button>
                                    <a href="#simulator" data-navigate="simulator" class="btn btn-success">
                                        <i class="bi bi-graph-up"></i> シミュレーターで検証
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// プランナー初期化
function initializePlanner() {
    // 既存のプランがあれば復元
    const savedPlan = localStorage.getItem('investmentPlan');
    if (savedPlan) {
        try {
            const plan = JSON.parse(savedPlan);
            restorePlan(plan);
        } catch (e) {
            console.log('保存されたプランの復元に失敗しました');
        }
    }
}

// プラン生成
function generatePlan() {
    const formData = {
        age: document.getElementById('age-select').value,
        experience: document.getElementById('experience-select').value,
        purpose: document.getElementById('purpose-select').value,
        period: document.getElementById('period-select').value,
        amount: document.getElementById('amount-select').value,
        risk: document.getElementById('risk-select').value
    };

    // 入力チェック
    const requiredFields = Object.values(formData);
    if (requiredFields.includes('')) {
        alert('すべての項目を入力してください');
        return;
    }

    const plan = createInvestmentPlan(formData);
    displayPlan(plan);
}

// 投資プラン作成ロジック
function createInvestmentPlan(data) {
    let plan = {
        profile: data,
        riskLevel: 'medium',
        portfolio: {},
        recommendations: [],
        steps: []
    };

    // リスクレベル決定
    if (data.risk === 'low' || data.age === '60s' || data.period === 'short') {
        plan.riskLevel = 'conservative';
    } else if (data.risk === 'high' && data.age !== '60s' && data.period === 'long') {
        plan.riskLevel = 'aggressive';
    }

    // ポートフォリオ配分
    switch (plan.riskLevel) {
        case 'conservative':
            plan.portfolio = {
                bonds: 60,
                stocks: 30,
                cash: 10
            };
            break;
        case 'aggressive':
            plan.portfolio = {
                stocks: 70,
                bonds: 20,
                alternativeInvestments: 10
            };
            break;
        default: // medium
            plan.portfolio = {
                stocks: 50,
                bonds: 40,
                cash: 10
            };
    }

    // 推奨事項
    plan.recommendations = generateRecommendations(data, plan.riskLevel);

    // 投資ステップ
    plan.steps = generateInvestmentSteps(data);

    return plan;
}

// 推奨事項生成
function generateRecommendations(data, riskLevel) {
    const recommendations = [];

    if (data.experience === 'beginner') {
        recommendations.push('まずは投資信託から始めることをお勧めします');
        recommendations.push('少額から始めて、徐々に投資額を増やしましょう');
    }

    if (data.period === 'long') {
        recommendations.push('長期投資なので積立投資を活用しましょう');
        recommendations.push('複利効果を最大化できます');
    }

    if (riskLevel === 'conservative') {
        recommendations.push('安全性を重視した債券中心のポートフォリオです');
        recommendations.push('定期的なリバランスを心がけましょう');
    } else if (riskLevel === 'aggressive') {
        recommendations.push('成長性を重視した株式中心のポートフォリオです');
        recommendations.push('市場の変動に惑わされず長期保有を心がけましょう');
    }

    return recommendations;
}

// 投資ステップ生成
function generateInvestmentSteps(data) {
    const steps = [
        '緊急時資金（生活費3-6ヶ月分）を確保する',
        '投資目標と期間を明確にする',
        '証券口座を開設する'
    ];

    if (data.experience === 'beginner') {
        steps.push('投資信託の積立から始める');
        steps.push('市場に慣れてから個別株式を検討する');
    } else {
        steps.push('分散投資を意識したポートフォリオを構築する');
        steps.push('定期的にポートフォリオを見直す');
    }

    steps.push('年1-2回のリバランスを実施する');

    return steps;
}

// プラン表示
function displayPlan(plan) {
    document.getElementById('plan-placeholder').style.display = 'none';
    document.getElementById('plan-result').style.display = 'block';
    document.getElementById('detailed-plan').style.display = 'block';

    // 基本プラン表示
    const planContent = document.getElementById('plan-content');
    planContent.innerHTML = `
        <div class="mb-3">
            <h6 class="text-success">リスクレベル</h6>
            <span class="badge bg-${getRiskColor(plan.riskLevel)} fs-6">
                ${getRiskLabel(plan.riskLevel)}
            </span>
        </div>

        <div class="mb-3">
            <h6 class="text-success">推奨事項</h6>
            <ul class="list-unstyled">
                ${plan.recommendations.map(rec => `<li><i class="bi bi-check-circle text-success me-2"></i>${rec}</li>`).join('')}
            </ul>
        </div>
    `;

    // ポートフォリオ詳細
    const portfolioBreakdown = document.getElementById('portfolio-breakdown');
    portfolioBreakdown.innerHTML = Object.entries(plan.portfolio).map(([asset, percentage]) => `
        <div class="d-flex justify-content-between align-items-center mb-2">
            <span>${getAssetLabel(asset)}</span>
            <div class="d-flex align-items-center">
                <div class="progress me-2" style="width: 100px; height: 20px;">
                    <div class="progress-bar bg-${getAssetColor(asset)}" style="width: ${percentage}%"></div>
                </div>
                <span class="fw-bold">${percentage}%</span>
            </div>
        </div>
    `).join('');

    // 投資ステップ
    const investmentSteps = document.getElementById('investment-steps');
    investmentSteps.innerHTML = `
        <ol class="list-group list-group-numbered">
            ${plan.steps.map(step => `<li class="list-group-item">${step}</li>`).join('')}
        </ol>
    `;

    // プランをグローバル変数に保存
    window.currentPlan = plan;
}

// ヘルパー関数
function getRiskColor(riskLevel) {
    switch (riskLevel) {
        case 'conservative': return 'info';
        case 'aggressive': return 'danger';
        default: return 'warning';
    }
}

function getRiskLabel(riskLevel) {
    switch (riskLevel) {
        case 'conservative': return '安全重視';
        case 'aggressive': return '成長重視';
        default: return 'バランス';
    }
}

function getAssetLabel(asset) {
    switch (asset) {
        case 'stocks': return '株式';
        case 'bonds': return '債券';
        case 'cash': return '現金';
        case 'alternativeInvestments': return 'オルタナティブ';
        default: return asset;
    }
}

function getAssetColor(asset) {
    switch (asset) {
        case 'stocks': return 'success';
        case 'bonds': return 'primary';
        case 'cash': return 'secondary';
        case 'alternativeInvestments': return 'warning';
        default: return 'light';
    }
}

// プラン保存
function savePlan() {
    if (!window.currentPlan) {
        alert('保存するプランがありません');
        return;
    }

    try {
        localStorage.setItem('investmentPlan', JSON.stringify(window.currentPlan));
        alert('プランが保存されました！');
    } catch (e) {
        alert('プランの保存に失敗しました');
    }
}

// プラン復元
function restorePlan(plan) {
    // フォームの復元
    if (plan.profile) {
        Object.entries(plan.profile).forEach(([key, value]) => {
            const element = document.getElementById(`${key}-select`);
            if (element) {
                element.value = value;
            }
        });
    }

    // プランの表示
    displayPlan(plan);
}
