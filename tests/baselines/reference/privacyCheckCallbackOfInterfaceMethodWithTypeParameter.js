//// [privacyCheckCallbackOfInterfaceMethodWithTypeParameter.ts]
export interface A<T> {
    f1(callback: (p: T) => any); 
}
 
export interface B<T> extends A<T> {
}


//// [privacyCheckCallbackOfInterfaceMethodWithTypeParameter.js]
define(["require", "exports"], function (require, exports) {
});