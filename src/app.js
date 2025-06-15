// メインアプリケーション
document.addEventListener('DOMContentLoaded', function() {
    // ルーターの設定
    router.addRoute('', HomeComponent);
    router.addRoute('knowledge', KnowledgeComponent);
    router.addRoute('simulator', SimulatorComponent);
    router.addRoute('quiz', QuizComponent);
    router.addRoute('planner', PlannerComponent);
    router.addRoute('minigame1', MiniGame1Component);
    router.addRoute('minigame2', MiniGame2Component);

    // アプリケーション開始
    router.start();

    console.log('Investment Simulator App started!');
});