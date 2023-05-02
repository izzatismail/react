//Whenever we create React component (that ends with .tsx, .ts is just plain Typescript file), we use PascalCasing
function Message() {
    //JSX: Javascript XML, basically Javascript in HTML
    const name='Izzat';
    return name ? <h1>Hello {name} World</h1> : <h1>Hello World</h1>;
}

export default Message;