class MyComponent {
    constructor() {
        this.element = document.createElement('div');
        this.element.className = 'my-component';
    }

    render() {
        this.element.innerHTML = '<h1>Hello from MyComponent!</h1>';
        return this.element;
    }
}

export { MyComponent };