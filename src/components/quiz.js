// クイズコンポーネント
function QuizComponent() {
    setTimeout(() => {
        initializeQuiz();
    }, 100);

    return `
        ${NavbarComponent()}
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="text-center mb-5">
                        <h1 class="display-5 text-warning mb-3">
                            <i class="bi bi-question-circle"></i> 投資クイズ
                        </h1>
                        <p class="lead">投資の知識をクイズで確認しましょう</p>
                    </div>

                    <div id="quiz-container">
                        <div class="card">
                            <div class="card-header d-flex justify-content-between align-items-center">
                                <h5 class="mb-0">クイズ <span id="current-question">1</span> / <span id="total-questions">5</span></h5>
                                <div class="progress" style="width: 200px;">
                                    <div class="progress-bar bg-warning" id="progress-bar" style="width: 20%"></div>
                                </div>
                            </div>
                            <div class="card-body">
                                <h6 id="question-text" class="mb-4">問題をロード中...</h6>
                                <div id="answer-options" class="d-grid gap-2">
                                    <!-- 選択肢がここに表示されます -->
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="quiz-result" class="text-center" style="display: none;">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="text-success mb-4">
                                    <i class="bi bi-trophy"></i> クイズ完了！
                                </h3>
                                <div class="row justify-content-center">
                                    <div class="col-md-6">
                                        <div class="display-4 text-primary mb-3" id="final-score">0/5</div>
                                        <p class="lead mb-4" id="score-message">結果メッセージ</p>
                                        <div class="d-grid gap-2">
                                            <button class="btn btn-warning" onclick="restartQuiz()">
                                                <i class="bi bi-arrow-clockwise"></i> もう一度チャレンジ
                                            </button>
                                            <a href="#knowledge" data-navigate="knowledge" class="btn btn-primary">
                                                <i class="bi bi-book"></i> 基礎知識を復習
                                            </a>
                                            <a href="#simulator" data-navigate="simulator" class="btn btn-success">
                                                <i class="bi bi-graph-up"></i> シミュレーターを試す
                                            </a>
                                        </div>
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

// クイズデータ
const quizData = [
    {
        question: "投資における「リスク」とは何を意味しますか？",
        options: [
            "必ず損をすること",
            "価格が変動する可能性",
            "投資額が2倍になること",
            "銀行に預けること"
        ],
        correct: 1,
        explanation: "リスクとは価格が変動する可能性のことで、必ずしも損失を意味するわけではありません。"
    },
    {
        question: "分散投資の目的は何ですか？",
        options: [
            "利益を最大化すること",
            "手数料を削減すること",
            "リスクを分散すること",
            "短期間で儲けること"
        ],
        correct: 2,
        explanation: "分散投資は、異なる資産に投資することでリスクを分散し、全体のリスクを下げることが目的です。"
    },
    {
        question: "「複利効果」とは何ですか？",
        options: [
            "税金が複雑になること",
            "利息に対してさらに利息が付くこと",
            "投資商品を複数買うこと",
            "手数料が複数かかること"
        ],
        correct: 1,
        explanation: "複利効果とは、元本だけでなく利息に対してもさらに利息が付くことで、時間とともに資産が大きく成長する効果です。"
    },
    {
        question: "一般的に、リスクとリターンの関係はどうなっていますか？",
        options: [
            "リスクが高いほどリターンも高い傾向がある",
            "リスクとリターンは関係ない",
            "リスクが低いほどリターンが高い",
            "リスクが高いほどリターンは低い"
        ],
        correct: 0,
        explanation: "一般的に、リスクが高い投資ほど期待できるリターンも高くなります。これをリスク・リターンの関係と言います。"
    },
    {
        question: "投資を始める前に最も重要なことは何ですか？",
        options: [
            "高額な投資商品を買うこと",
            "投資目標と期間を明確にすること",
            "友人の意見を聞くこと",
            "すぐに売買を繰り返すこと"
        ],
        correct: 1,
        explanation: "投資を始める前に、何のために投資するのか、いつまでに達成したいのかを明確にすることが最も重要です。"
    }
];

// クイズ初期化
function initializeQuiz() {
    window.quizState = {
        currentQuestion: 0,
        score: 0,
        answered: false
    };
    showQuestion();
}

// 問題表示
function showQuestion() {
    const quiz = quizData[window.quizState.currentQuestion];
    const questionNumber = window.quizState.currentQuestion + 1;

    document.getElementById('current-question').textContent = questionNumber;
    document.getElementById('total-questions').textContent = quizData.length;
    document.getElementById('progress-bar').style.width = `${(questionNumber / quizData.length) * 100}%`;
    document.getElementById('question-text').textContent = quiz.question;

    const optionsContainer = document.getElementById('answer-options');
    optionsContainer.innerHTML = quiz.options.map((option, index) =>
        `<button class="btn btn-outline-primary" onclick="selectAnswer(${index})">${option}</button>`
    ).join('');

    window.quizState.answered = false;
}

// 回答選択
function selectAnswer(selectedIndex) {
    if (window.quizState.answered) return;

    window.quizState.answered = true;
    const quiz = quizData[window.quizState.currentQuestion];
    const buttons = document.querySelectorAll('#answer-options button');

    buttons.forEach((button, index) => {
        if (index === quiz.correct) {
            button.className = 'btn btn-success';
        } else if (index === selectedIndex && index !== quiz.correct) {
            button.className = 'btn btn-danger';
        } else {
            button.className = 'btn btn-secondary';
        }
        button.disabled = true;
    });

    if (selectedIndex === quiz.correct) {
        window.quizState.score++;
    }

    // 解説表示
    const explanationDiv = document.createElement('div');
    explanationDiv.className = 'alert alert-info mt-3';
    explanationDiv.innerHTML = `
        <strong>解説:</strong> ${quiz.explanation}
        <div class="mt-2">
            <button class="btn btn-warning" onclick="nextQuestion()">
                ${window.quizState.currentQuestion < quizData.length - 1 ? '次の問題へ' : '結果を見る'}
            </button>
        </div>
    `;
    document.querySelector('#quiz-container .card-body').appendChild(explanationDiv);
}

// 次の問題へ
function nextQuestion() {
    window.quizState.currentQuestion++;

    if (window.quizState.currentQuestion >= quizData.length) {
        showResult();
    } else {
        showQuestion();
    }
}

// 結果表示
function showResult() {
    const score = window.quizState.score;
    const total = quizData.length;
    const percentage = Math.round((score / total) * 100);

    let message;
    if (percentage >= 80) {
        message = "素晴らしい！投資の基礎知識をよく理解していますね。";
    } else if (percentage >= 60) {
        message = "良い結果です！少し復習すればさらに理解が深まります。";
    } else {
        message = "基礎知識の復習をおすすめします。頑張りましょう！";
    }

    document.getElementById('final-score').textContent = `${score}/${total} (${percentage}%)`;
    document.getElementById('score-message').textContent = message;

    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'block';
}

// クイズリスタート
function restartQuiz() {
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('quiz-result').style.display = 'none';
    initializeQuiz();
}
