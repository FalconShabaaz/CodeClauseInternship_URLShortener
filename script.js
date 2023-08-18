console.log("Hello Shabaaz");

let output = document.getElementById("output");
let inputBtn = document.getElementById("inputBtn");
let copyBtn = document.getElementById("copyBtn");


inputBtn.addEventListener('click',()=>{
    let inputValue = document.getElementById("input").value;
    console.log(inputValue)
    handleUrl(inputValue)
})


const handleUrl = async (inputValue) => {
    try {
        const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
        const data = await result.json();
        console.log(data);
        if(data.ok===false){
            alert('Please Enter a Valid URL!')
        }
        output.value = data.result.short_link2;
    } catch (error) {
        console.error(error);
    }
};

copyBtn.addEventListener('click',async ()=>{
    await navigator.clipboard.writeText(output.value);
    copyBtn.innerText = "URL Copied!";
    // await alert('Copied to ClipBoard!')
})