// シンプルなSPAルーター
class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = '';

        window.addEventListener('popstate', () => {
            this.loadRoute(window.location.hash.slice(1) || '');
        });
    }

    addRoute(path, component) {
        this.routes[path] = component;
    }

    navigateTo(path) {
        window.location.hash = path;
        this.loadRoute(path);
    }

    loadRoute(path) {
        this.currentRoute = path;
        const component = this.routes[path] || this.routes[''];

        if (component) {
            const appElement = document.getElementById('app');
            appElement.innerHTML = component();

            // ページ遷移後のイベントリスナー設定
            this.bindEvents();
        }
    }

    bindEvents() {
        // ナビゲーションリンクのクリックイベント
        document.querySelectorAll('[data-navigate]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const path = link.getAttribute('data-navigate');
                this.navigateTo(path);
            });
        });
    }

    start() {
        const initialPath = window.location.hash.slice(1) || '';
        this.loadRoute(initialPath);
    }
}

// グローバルルーターインスタンス
window.router = new Router();
