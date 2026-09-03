function customRender(cutomElemnt , container){
 const   domElemnt = document.createElement(cutomElemnt.type);
 domElemnt.innerHTML = cutomElemnt.children;
 domElemnt.setAttribute('href' ,cutomElemnt.props.href);
 domElemnt.setAttribute('target' , cutomElemnt.props.target);
 container.appendChild(domElemnt);
}

const cutomElemnt = {
    type: 'a',
    props:{
        href : 'https://google.com',
        target: '_blank'
    },
    children : "hello i am custom react a tag"
}

const container = document.getElementById("root");

customRender(cutomElemnt , container);




