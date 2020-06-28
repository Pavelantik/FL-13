// Example: $('#someId').css({'prop' : 'value', 'prop1' : 'value1', ...});

//body: add padding 30px
$('body').css('padding','30px');
// id title: make align center, remove top margin
$('#title').css('text-align', 'center')
// div after header: add double border and padding 20px
$('header + div').css({
  borderStyle: 'double',
  padding: '20px'
})
// change color for all h2 and set top margin to 0
$('h2').css({
  color: 'green',
  marginTop: '0px'
})
// set font size 18px for all .list direct children
$('.list > li').css({
  fontSize: '18px',
})
$('.list li').not('.list > li').css('font-size', 'initial')


// in #list-1
  // show all hidden and not cloned li
$('#list-1 :hidden').not('.cloned').css('display', 'list-item')
  // hide empty li
$('#list-1 li:empty').css('display', 'none')
// in #list-3
  // for all even li set margin-left -20px
$('#list-3 li:odd').css('margin-left', '-20px')
  // for the first li set any different color
$('#list-3 li:first-of-type').css('color', 'blue')
  // for all li with index > 5 set color to #ccc
$('#list-3 li:gt(5)').css('color', '#ccc')
// for li wich has em add red color
$('li').has('em').css('color', 'red')
// for li which contains text 'Buratino' set font weight to bold
$('li:contains(Buratino)').css('font-weight', 'bold')

// for b in p which is the only child set font size 36px
$('p b:only-child').css('font-size', '36px')
// for em in p which is the last child of type set color to green
$('p em:last-of-type').css('color', 'green')

// set width 80px for input with attribute name ended by 'age'
$('input').filter('[name $= age]').css('width', '80px')
// set width 120px for input with attribute name started by 'my'
$('input').filter('[name ^= my]').css('width', '120px')

// console.log checked checkbox
$('[type = checkbox').each(function(){
  if($(this).prop('checked')){
    console.log($(this).attr('value'))
  }  
})
// show all images with a cat
$('[alt *= cat').css('display', 'initial');
// wrap every image into the div
$('img').wrap('<div class= "img-wrapper"></div>')
// for .mbox with index 3 set padding-top 50px
$('.mbox:eq(3)').css('padding-top', '50px')
// for first div wraper for img set float left and border red
$('.img-wrapper:eq(0)').css('float', 'left')