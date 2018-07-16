

let nightClick=document.querySelectorAll('.colorItem');
let r=document.querySelector('.linkColor')
// nightClick.addEventListener('click',()=>{
//     r.href="css/style1.css"
// })
let k=1;
for(let i of nightClick){
    $(i).val(k);
    k++;
}
for(let i of nightClick){
    $(document).ready(function () {
        $(i).click(()=>{
            r.href=`css/color/color${$(i).val()}.css`
        })
    })

}
