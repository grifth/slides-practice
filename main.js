let $buttons =  $('.buttons>button')
let $slides = $('.slides')
let $images = $slides.children('img')
let current = 0

makeFakeSlides()

function makeFakeSlides(){
  let $firstCopy = $images.eq(0).clone(true)
  let $lastCopy = $images.eq($images.length-1).clone(true)
  $slides.append($firstCopy)
  $slides.prepend($lastCopy)
}

$buttons.on('click',(e)=>{
  let $button = $(e.currentTarget)
  let index = $button.index()
  if(current===$buttons.length-1 && index === 0){
    $slides.css({transform:`translateX(${-($buttons.length+1)*600}px)`})
           .one('transitionend',function(){
             $slides.hide().offset()
             $slides.css({transform:`translateX(-600px)`}).show()
           })
  }else if(current===0 && index === $buttons.length-1){
    $slides.css({transform:'translateX(0px)'})
           .one('transitionend',()=>{
            $slides.hide().offset()
            $slides.css({transform:`translateX(${-(index+1)*600}px)`}).show()
           })
  }else{
    $slides.css({transform:`translateX(${-(index+1)*600}px)` })
  }
  current = index
})
