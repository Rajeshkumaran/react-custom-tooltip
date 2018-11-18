export const isString = (data)=>{
    return typeof data ==="string";
}
export const isFunc = (data)=>{
    return typeof data ==='function';
}

export const isNode = (data)=>{
    return  data instanceof Element;
}