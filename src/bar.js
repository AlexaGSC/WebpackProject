export default function bar() {

    console.log('Hello from WebPack');
}

export function defaultParameters(height, color = '#FF000') {
    console.log('Default Parameters', height, color);
}

export function arrow() {
    return [1,2,3].map((n) => n + 1);
}
 