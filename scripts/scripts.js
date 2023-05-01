let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")
proximo = () =>{
    if(img1.style.display == "block"){
        img1.classList.remove("animationimgenter")
        img1.classList.add("animationimgback")
        setTimeout(()=>{
            img1.style.display="none"
            img2.style.display="block"
            img2.style.opacity="0"
            img2.classList.add("animationimgenter")
            setTimeout(()=>{
                img2.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img2.style.display == "block"){
        img2.classList.remove("animationimgenter")
        img2.classList.add("animationimgback")
        setTimeout(()=>{
        img2.style.display="none"
        img3.style.display="block"
        img3.style.opacity="0"
        img3.classList.add("animationimgenter")
            setTimeout(()=>{
                img3.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img3.style.display == "block"){
        img3.classList.remove("animationimgenter")
        img3.classList.add("animationimgback")
        setTimeout(()=>{
        img3.style.display="none"
        img1.style.display="block"
        img1.style.opacity="0"
        img1.classList.add("animationimgenter")
            setTimeout(()=>{
                img1.style.opacity="100%"
            }, 500)
        }, 500)
    }
}
voltar = ()=>{
    if(img1.style.display == "block"){
        img1.classList.remove("animationimgenter")
        img1.classList.add("animationimgback")
        setTimeout(()=>{
            img1.style.display="none"
            img3.style.opacity="0"
            img3.style.display="block"
            img3.classList.add("animationimgenter")
            setTimeout(()=>{
                img3.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img2.style.display == "block"){
        img2.classList.remove("animationimgenter")
        img2.classList.add("animationimgback")
        setTimeout(()=>{
            img2.style.display="none"
            img1.style.opacity="0"
            img1.style.display="block"
            img1.classList.add("animationimgenter")
            setTimeout(()=>{
                img1.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img3.style.display == "block"){
        img3.classList.remove("animationimgenter")
        img3.classList.add("animationimgback")
        setTimeout(()=>{
            img3.style.display="none"
            img2.style.opacity="0"
            img2.style.display="block"
            img2.classList.add("animationimgenter")
            setTimeout(()=>{
                img2.style.opacity="100%"
            }, 500)
        }, 500)
    }
}
let img1_2 = document.getElementById("img1-2")
let img2_2 = document.getElementById("img2-2")
let img3_2 = document.getElementById("img3-2")
proximo2 = () =>{
    if(img1_2.style.display == "block"){
        img1_2.classList.remove("animationimgenter")
        img1_2.classList.add("animationimgback")
        setTimeout(()=>{
            img1_2.style.display="none"
            img2_2.style.display="block"
            img2_2.style.opacity="0"
            img2_2.classList.add("animationimgenter")
            setTimeout(()=>{
                img2_2.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img2_2.style.display == "block"){
        img2_2.classList.remove("animationimgenter")
        img2_2.classList.add("animationimgback")
        setTimeout(()=>{
        img2_2.style.display="none"
        img3_2.style.display="block"
        img3_2.style.opacity="0"
        img3_2.classList.add("animationimgenter")
            setTimeout(()=>{
                img3_2.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img3_2.style.display == "block"){
        img3_2.classList.remove("animationimgenter")
        img3_2.classList.add("animationimgback")
        setTimeout(()=>{
        img3_2.style.display="none"
        img1_2.style.display="block"
        img1_2.style.opacity="0"
        img1_2.classList.add("animationimgenter")
            setTimeout(()=>{
                img1_2.style.opacity="100%"
            }, 500)
        }, 500)
    }
}
voltar2 = ()=>{
    if(img1_2.style.display == "block"){
        img1_2.classList.remove("animationimgenter")
        img1_2.classList.add("animationimgback")
        setTimeout(()=>{
            img1_2.style.display="none"
            img3_2.style.opacity="0"
            img3_2.style.display="block"
            img3_2.classList.add("animationimgenter")
            setTimeout(()=>{
                img3_2.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img2_2.style.display == "block"){
        img2_2.classList.remove("animationimgenter")
        img2_2.classList.add("animationimgback")
        setTimeout(()=>{
            img2_2.style.display="none"
            img1_2.style.opacity="0"
            img1_2.style.display="block"
            img1_2.classList.add("animationimgenter")
            setTimeout(()=>{
                img1_2.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img3_2.style.display == "block"){
        img3_2.classList.remove("animationimgenter")
        img3_2.classList.add("animationimgback")
        setTimeout(()=>{
            img3_2.style.display="none"
            img2_2.style.opacity="0"
            img2_2.style.display="block"
            img2_2.classList.add("animationimgenter")
            setTimeout(()=>{
                img2_2.style.opacity="100%"
            }, 500)
        }, 500)
    }
}
let img1_3 = document.getElementById("img1-3")
let img2_3 = document.getElementById("img2-3")
let img3_3 = document.getElementById("img3-3")
proximo3 = () =>{
    if(img1_3.style.display == "block"){
        img1_3.classList.remove("animationimgenter")
        img1_3.classList.add("animationimgback")
        setTimeout(()=>{
            img1_3.style.display="none"
            img2_3.style.display="block"
            img2_3.style.opacity="0"
            img2_3.classList.add("animationimgenter")
            setTimeout(()=>{
                img2_3.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img2_3.style.display == "block"){
        img2_3.classList.remove("animationimgenter")
        img2_3.classList.add("animationimgback")
        setTimeout(()=>{
        img2_3.style.display="none"
        img3_3.style.display="block"
        img3_3.style.opacity="0"
        img3_3.classList.add("animationimgenter")
            setTimeout(()=>{
                img3_3.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img3_3.style.display == "block"){
        img3_3.classList.remove("animationimgenter")
        img3_3.classList.add("animationimgback")
        setTimeout(()=>{
        img3_3.style.display="none"
        img1_3.style.display="block"
        img1_3.style.opacity="0"
        img1_3.classList.add("animationimgenter")
            setTimeout(()=>{
                img1_3.style.opacity="100%"
            }, 500)
        }, 500)
    }
}
voltar3 = ()=>{
    if(img1_3.style.display == "block"){
        img1_3.classList.remove("animationimgenter")
        img1_3.classList.add("animationimgback")
        setTimeout(()=>{
            img1_3.style.display="none"
            img3_3.style.opacity="0"
            img3_3.style.display="block"
            img3_3.classList.add("animationimgenter")
            setTimeout(()=>{
                img3_3.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img2_3.style.display == "block"){
        img2_3.classList.remove("animationimgenter")
        img2_3.classList.add("animationimgback")
        setTimeout(()=>{
            img2_3.style.display="none"
            img1_3.style.opacity="0"
            img1_3.style.display="block"
            img1_3.classList.add("animationimgenter")
            setTimeout(()=>{
                img1_3.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img3_3.style.display == "block"){
        img3_3.classList.remove("animationimgenter")
        img3_3.classList.add("animationimgback")
        setTimeout(()=>{
            img3_3.style.display="none"
            img2_3.style.opacity="0"
            img2_3.style.display="block"
            img2_3.classList.add("animationimgenter")
            setTimeout(()=>{
                img2_3.style.opacity="100%"
            }, 500)
        }, 500)
    }
}
let img1_4 = document.getElementById("img1-4")
let img2_4 = document.getElementById("img2-4")
let img3_4 = document.getElementById("img3-4")
proximo4 = () =>{
    if(img1_4.style.display == "block"){
        img1_4.classList.remove("animationimgenter")
        img1_4.classList.add("animationimgback")
        setTimeout(()=>{
            img1_4.style.display="none"
            img2_4.style.display="block"
            img2_4.style.opacity="0"
            img2_4.classList.add("animationimgenter")
            setTimeout(()=>{
                img2_4.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img2_4.style.display == "block"){
        img2_4.classList.remove("animationimgenter")
        img2_4.classList.add("animationimgback")
        setTimeout(()=>{
        img2_4.style.display="none"
        img3_4.style.display="block"
        img3_4.style.opacity="0"
        img3_4.classList.add("animationimgenter")
            setTimeout(()=>{
                img3_4.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img3_4.style.display == "block"){
        img3_4.classList.remove("animationimgenter")
        img3_4.classList.add("animationimgback")
        setTimeout(()=>{
        img3_4.style.display="none"
        img1_4.style.display="block"
        img1_4.style.opacity="0"
        img1_4.classList.add("animationimgenter")
            setTimeout(()=>{
                img1_4.style.opacity="100%"
            }, 500)
        }, 500)
    }
}
voltar4 = ()=>{
    if(img1_4.style.display == "block"){
        img1_4.classList.remove("animationimgenter")
        img1_4.classList.add("animationimgback")
        setTimeout(()=>{
            img1_4.style.display="none"
            img3_4.style.opacity="0"
            img3_4.style.display="block"
            img3_4.classList.add("animationimgenter")
            setTimeout(()=>{
                img3_4.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img2_4.style.display == "block"){
        img2_4.classList.remove("animationimgenter")
        img2_4.classList.add("animationimgback")
        setTimeout(()=>{
            img2_4.style.display="none"
            img1_4.style.opacity="0"
            img1_4.style.display="block"
            img1_4.classList.add("animationimgenter")
            setTimeout(()=>{
                img1_4.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img3_4.style.display == "block"){
        img3_4.classList.remove("animationimgenter")
        img3_4.classList.add("animationimgback")
        setTimeout(()=>{
            img3_4.style.display="none"
            img2_4.style.opacity="0"
            img2_4.style.display="block"
            img2_4.classList.add("animationimgenter")
            setTimeout(()=>{
                img2_4.style.opacity="100%"
            }, 500)
        }, 500)
    }
}
let img1_5 = document.getElementById("img1-5")
let img2_5 = document.getElementById("img2-5")
let img3_5 = document.getElementById("img3-5")
proximo5 = () =>{
    if(img1_5.style.display == "block"){
        img1_5.classList.remove("animationimgenter")
        img1_5.classList.add("animationimgback")
        setTimeout(()=>{
            img1_5.style.display="none"
            img2_5.style.display="block"
            img2_5.style.opacity="0"
            img2_5.classList.add("animationimgenter")
            setTimeout(()=>{
                img2_5.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img2_5.style.display == "block"){
        img2_5.classList.remove("animationimgenter")
        img2_5.classList.add("animationimgback")
        setTimeout(()=>{
        img2_5.style.display="none"
        img3_5.style.display="block"
        img3_5.style.opacity="0"
        img3_5.classList.add("animationimgenter")
            setTimeout(()=>{
                img3_5.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img3_5.style.display == "block"){
        img3_5.classList.remove("animationimgenter")
        img3_5.classList.add("animationimgback")
        setTimeout(()=>{
        img3_5.style.display="none"
        img1_5.style.display="block"
        img1_5.style.opacity="0"
        img1_5.classList.add("animationimgenter")
            setTimeout(()=>{
                img1_5.style.opacity="100%"
            }, 500)
        }, 500)
    }
}
voltar5 = ()=>{
    if(img1_5.style.display == "block"){
        img1_5.classList.remove("animationimgenter")
        img1_5.classList.add("animationimgback")
        setTimeout(()=>{
            img1_5.style.display="none"
            img3_5.style.opacity="0"
            img3_5.style.display="block"
            img3_5.classList.add("animationimgenter")
            setTimeout(()=>{
                img3_5.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img2_5.style.display == "block"){
        img2_5.classList.remove("animationimgenter")
        img2_5.classList.add("animationimgback")
        setTimeout(()=>{
            img2_5.style.display="none"
            img1_5.style.opacity="0"
            img1_5.style.display="block"
            img1_5.classList.add("animationimgenter")
            setTimeout(()=>{
                img1_5.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img3_5.style.display == "block"){
        img3_5.classList.remove("animationimgenter")
        img3_5.classList.add("animationimgback")
        setTimeout(()=>{
            img3_5.style.display="none"
            img2_5.style.opacity="0"
            img2_5.style.display="block"
            img2_5.classList.add("animationimgenter")
            setTimeout(()=>{
                img2_5.style.opacity="100%"
            }, 500)
        }, 500)
    }
}
let img1_6 = document.getElementById("img1-6")
let img2_6 = document.getElementById("img2-6")
let img3_6 = document.getElementById("img3-6")
proximo6 = () =>{
    if(img1_6.style.display == "block"){
        img1_6.classList.remove("animationimgenter")
        img1_6.classList.add("animationimgback")
        setTimeout(()=>{
            img1_6.style.display="none"
            img2_6.style.display="block"
            img2_6.style.opacity="0"
            img2_6.classList.add("animationimgenter")
            setTimeout(()=>{
                img2_6.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img2_6.style.display == "block"){
        img2_6.classList.remove("animationimgenter")
        img2_6.classList.add("animationimgback")
        setTimeout(()=>{
        img2_6.style.display="none"
        img3_6.style.display="block"
        img3_6.style.opacity="0"
        img3_6.classList.add("animationimgenter")
            setTimeout(()=>{
                img3_6.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img3_6.style.display == "block"){
        img3_6.classList.remove("animationimgenter")
        img3_6.classList.add("animationimgback")
        setTimeout(()=>{
        img3_6.style.display="none"
        img1_6.style.display="block"
        img1_6.style.opacity="0"
        img1_6.classList.add("animationimgenter")
            setTimeout(()=>{
                img1_6.style.opacity="100%"
            }, 500)
        }, 500)
    }
}
voltar6 = ()=>{
    if(img1_6.style.display == "block"){
        img1_6.classList.remove("animationimgenter")
        img1_6.classList.add("animationimgback")
        setTimeout(()=>{
            img1_6.style.display="none"
            img3_6.style.opacity="0"
            img3_6.style.display="block"
            img3_6.classList.add("animationimgenter")
            setTimeout(()=>{
                img3_6.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img2_6.style.display == "block"){
        img2_6.classList.remove("animationimgenter")
        img2_6.classList.add("animationimgback")
        setTimeout(()=>{
            img2_6.style.display="none"
            img1_6.style.opacity="0"
            img1_6.style.display="block"
            img1_6.classList.add("animationimgenter")
            setTimeout(()=>{
                img1_6.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img3_6.style.display == "block"){
        img3_6.classList.remove("animationimgenter")
        img3_6.classList.add("animationimgback")
        setTimeout(()=>{
            img3_6.style.display="none"
            img2_6.style.opacity="0"
            img2_6.style.display="block"
            img2_6.classList.add("animationimgenter")
            setTimeout(()=>{
                img2_6.style.opacity="100%"
            }, 500)
        }, 500)
    }
}
let img1_7 = document.getElementById("img1-7")
let img2_7 = document.getElementById("img2-7")
let img3_7 = document.getElementById("img3-7")
proximo7 = () =>{
    if(img1_7.style.display == "block"){
        img1_7.classList.remove("animationimgenter")
        img1_7.classList.add("animationimgback")
        setTimeout(()=>{
            img1_7.style.display="none"
            img2_7.style.display="block"
            img2_7.style.opacity="0"
            img2_7.classList.add("animationimgenter")
            setTimeout(()=>{
                img2_7.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img2_7.style.display == "block"){
        img2_7.classList.remove("animationimgenter")
        img2_7.classList.add("animationimgback")
        setTimeout(()=>{
        img2_7.style.display="none"
        img3_7.style.display="block"
        img3_7.style.opacity="0"
        img3_7.classList.add("animationimgenter")
            setTimeout(()=>{
                img3_7.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img3_7.style.display == "block"){
        img3_7.classList.remove("animationimgenter")
        img3_7.classList.add("animationimgback")
        setTimeout(()=>{
        img3_7.style.display="none"
        img1_7.style.display="block"
        img1_7.style.opacity="0"
        img1_7.classList.add("animationimgenter")
            setTimeout(()=>{
                img1_7.style.opacity="100%"
            }, 500)
        }, 500)
    }
}
voltar7 = ()=>{
    if(img1_7.style.display == "block"){
        img1_7.classList.remove("animationimgenter")
        img1_7.classList.add("animationimgback")
        setTimeout(()=>{
            img1_7.style.display="none"
            img3_7.style.opacity="0"
            img3_7.style.display="block"
            img3_7.classList.add("animationimgenter")
            setTimeout(()=>{
                img3_7.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img2_7.style.display == "block"){
        img2_7.classList.remove("animationimgenter")
        img2_7.classList.add("animationimgback")
        setTimeout(()=>{
            img2_7.style.display="none"
            img1_7.style.opacity="0"
            img1_7.style.display="block"
            img1_7.classList.add("animationimgenter")
            setTimeout(()=>{
                img1_7.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img3_7.style.display == "block"){
        img3_7.classList.remove("animationimgenter")
        img3_7.classList.add("animationimgback")
        setTimeout(()=>{
            img3_7.style.display="none"
            img2_7.style.opacity="0"
            img2_7.style.display="block"
            img2_7.classList.add("animationimgenter")
            setTimeout(()=>{
                img2_7.style.opacity="100%"
            }, 500)
        }, 500)
    }
}
let img1_8 = document.getElementById("img1-8")
let img2_8 = document.getElementById("img2-8")
let img3_8 = document.getElementById("img3-8")
proximo8 = () =>{
    if(img1_8.style.display == "block"){
        img1_8.classList.remove("animationimgenter")
        img1_8.classList.add("animationimgback")
        setTimeout(()=>{
            img1_8.style.display="none"
            img2_8.style.display="block"
            img2_8.style.opacity="0"
            img2_8.classList.add("animationimgenter")
            setTimeout(()=>{
                img2_8.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img2_8.style.display == "block"){
        img2_8.classList.remove("animationimgenter")
        img2_8.classList.add("animationimgback")
        setTimeout(()=>{
        img2_8.style.display="none"
        img3_8.style.display="block"
        img3_8.style.opacity="0"
        img3_8.classList.add("animationimgenter")
            setTimeout(()=>{
                img3_8.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img3_8.style.display == "block"){
        img3_8.classList.remove("animationimgenter")
        img3_8.classList.add("animationimgback")
        setTimeout(()=>{
        img3_8.style.display="none"
        img1_8.style.display="block"
        img1_8.style.opacity="0"
        img1_8.classList.add("animationimgenter")
            setTimeout(()=>{
                img1_8.style.opacity="100%"
            }, 500)
        }, 500)
    }
}
voltar8 = ()=>{
    if(img1_8.style.display == "block"){
        img1_8.classList.remove("animationimgenter")
        img1_8.classList.add("animationimgback")
        setTimeout(()=>{
            img1_8.style.display="none"
            img3_8.style.opacity="0"
            img3_8.style.display="block"
            img3_8.classList.add("animationimgenter")
            setTimeout(()=>{
                img3_8.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img2_8.style.display == "block"){
        img2_8.classList.remove("animationimgenter")
        img2_8.classList.add("animationimgback")
        setTimeout(()=>{
            img2_8.style.display="none"
            img1_8.style.opacity="0"
            img1_8.style.display="block"
            img1_8.classList.add("animationimgenter")
            setTimeout(()=>{
                img1_8.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img3_8.style.display == "block"){
        img3_8.classList.remove("animationimgenter")
        img3_8.classList.add("animationimgback")
        setTimeout(()=>{
            img3_8.style.display="none"
            img2_8.style.opacity="0"
            img2_8.style.display="block"
            img2_8.classList.add("animationimgenter")
            setTimeout(()=>{
                img2_8.style.opacity="100%"
            }, 500)
        }, 500)
    }
}
let img1_9 = document.getElementById("img1-9")
let img2_9 = document.getElementById("img2-9")
let img3_9 = document.getElementById("img3-9")
proximo9 = () =>{
    if(img1_9.style.display == "block"){
        img1_9.classList.remove("animationimgenter")
        img1_9.classList.add("animationimgback")
        setTimeout(()=>{
            img1_9.style.display="none"
            img2_9.style.display="block"
            img2_9.style.opacity="0"
            img2_9.classList.add("animationimgenter")
            setTimeout(()=>{
                img2_9.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img2_9.style.display == "block"){
        img2_9.classList.remove("animationimgenter")
        img2_9.classList.add("animationimgback")
        setTimeout(()=>{
        img2_9.style.display="none"
        img3_9.style.display="block"
        img3_9.style.opacity="0"
        img3_9.classList.add("animationimgenter")
            setTimeout(()=>{
                img3_9.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img3_9.style.display == "block"){
        img3_9.classList.remove("animationimgenter")
        img3_9.classList.add("animationimgback")
        setTimeout(()=>{
        img3_9.style.display="none"
        img1_9.style.display="block"
        img1_9.style.opacity="0"
        img1_9.classList.add("animationimgenter")
            setTimeout(()=>{
                img1_9.style.opacity="100%"
            }, 500)
        }, 500)
    }
}
voltar9 = ()=>{
    if(img1_9.style.display == "block"){
        img1_9.classList.remove("animationimgenter")
        img1_9.classList.add("animationimgback")
        setTimeout(()=>{
            img1_9.style.display="none"
            img3_9.style.opacity="0"
            img3_9.style.display="block"
            img3_9.classList.add("animationimgenter")
            setTimeout(()=>{
                img3_9.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img2_9.style.display == "block"){
        img2_9.classList.remove("animationimgenter")
        img2_9.classList.add("animationimgback")
        setTimeout(()=>{
            img2_9.style.display="none"
            img1_9.style.opacity="0"
            img1_9.style.display="block"
            img1_9.classList.add("animationimgenter")
            setTimeout(()=>{
                img1_9.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img3_9.style.display == "block"){
        img3_9.classList.remove("animationimgenter")
        img3_9.classList.add("animationimgback")
        setTimeout(()=>{
            img3_9.style.display="none"
            img2_9.style.opacity="0"
            img2_9.style.display="block"
            img2_9.classList.add("animationimgenter")
            setTimeout(()=>{
                img2_9.style.opacity="100%"
            }, 500)
        }, 500)
    }
}
let img1_10 = document.getElementById("img1-10")
let img2_10 = document.getElementById("img2-10")
let img3_10 = document.getElementById("img3-10")
proximo10 = () =>{
    if(img1_10.style.display == "block"){
        img1_10.classList.remove("animationimgenter")
        img1_10.classList.add("animationimgback")
        setTimeout(()=>{
            img1_10.style.display="none"
            img2_10.style.display="block"
            img2_10.style.opacity="0"
            img2_10.classList.add("animationimgenter")
            setTimeout(()=>{
                img2_10.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img2_10.style.display == "block"){
        img2_10.classList.remove("animationimgenter")
        img2_10.classList.add("animationimgback")
        setTimeout(()=>{
        img2_10.style.display="none"
        img3_10.style.display="block"
        img3_10.style.opacity="0"
        img3_10.classList.add("animationimgenter")
            setTimeout(()=>{
                img3_10.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img3_10.style.display == "block"){
        img3_10.classList.remove("animationimgenter")
        img3_10.classList.add("animationimgback")
        setTimeout(()=>{
        img3_10.style.display="none"
        img1_10.style.display="block"
        img1_10.style.opacity="0"
        img1_10.classList.add("animationimgenter")
            setTimeout(()=>{
                img1_10.style.opacity="100%"
            }, 500)
        }, 500)
    }
}
voltar10 = ()=>{
    if(img1_10.style.display == "block"){
        img1_10.classList.remove("animationimgenter")
        img1_10.classList.add("animationimgback")
        setTimeout(()=>{
            img1_10.style.display="none"
            img3_10.style.opacity="0"
            img3_10.style.display="block"
            img3_10.classList.add("animationimgenter")
            setTimeout(()=>{
                img3_10.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img2_10.style.display == "block"){
        img2_10.classList.remove("animationimgenter")
        img2_10.classList.add("animationimgback")
        setTimeout(()=>{
            img2_10.style.display="none"
            img1_10.style.opacity="0"
            img1_10.style.display="block"
            img1_10.classList.add("animationimgenter")
            setTimeout(()=>{
                img1_10.style.opacity="100%"
            }, 500)
        }, 500)
    }
    else if(img3_10.style.display == "block"){
        img3_10.classList.remove("animationimgenter")
        img3_10.classList.add("animationimgback")
        setTimeout(()=>{
            img3_10.style.display="none"
            img2_10.style.opacity="0"
            img2_10.style.display="block"
            img2_10.classList.add("animationimgenter")
            setTimeout(()=>{
                img2_10.style.opacity="100%"
            }, 500)
        }, 500)
    }
}