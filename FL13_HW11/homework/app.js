const data = [
  {
    'folder': true,
    'title': 'Pictures',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'Vacations',
        'children': [
          {
            'title': 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Desktop',
    'children': [
      {
        'folder': true,
        'title': 'screenshots',
        'children': null
      }
    ]
  },
  {
    'folder': true,
    'title': 'Downloads',
    'children': [
      {
        'folder': true,
        'title': 'JS',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');


const openClose = {
  'folder':'folder_open',
  'folder_open': 'folder'
}

function doClick(event){
  event.currentTarget.firstElementChild.textContent = openClose[event.currentTarget.firstElementChild.textContent];
  event.currentTarget.nextElementSibling.classList.toggle('subfolder-hidden');
}
let thisRightClickedEl='';
function doRightClick(event){
  // contextMenu.classList.toggle()
  contextMenu.style.display='initial';
  contextMenu.style.top = event.clientY+'px';
  contextMenu.style.left = event.clientX+'px';
  thisRightClickedEl= this;

}
function doRename(event){
 // console.log(thisRightClickedEl);
  contextMenu.style.display='none';
  thisRightClickedEl.children[1].disabled= false;
  thisRightClickedEl.children[1].focus();
  const point = thisRightClickedEl.children[1].value.indexOf('.');
  if (point=== -1){
    thisRightClickedEl.children[1].select();
  } else {
    thisRightClickedEl.children[1].selectionStart= 0;
    thisRightClickedEl.children[1].selectionEnd= point;
  }
  
 
}
function finishRename(ev){
  thisRightClickedEl.children[1].disabled= true;
}

function doDelete(ev){
 // if(thisRightClickedEl)
  
}

function addUl(parent){
  let ul = document.createElement('ul');
  parent.append(ul);
  return ul;
}

function addFolder(parentEl, title){
  let li =  document.createElement('li');
   li.innerHTML=`<i class="material-icons">folder</i>
    <input type="text" value="${title}" disabled class="input-disabled title-element" onblur="finishRename()">
  `;
  li.className='element folder';
  parentEl.append(li);
  li.addEventListener('click',doClick);
  li.addEventListener('contextmenu',doRightClick);

  return li;
}
function addFile(parentEl, title){
  let li =  document.createElement('li');
  li.innerHTML=`<i class="material-icons">insert_drive_file</i>
  <input type="text" value="${title}" disabled class="input-disabled" onblur="finishRename">`;
  li.className='element file';
  li.addEventListener('contextmenu',doRightClick);
  parentEl.append(li);
  return li;
}


function paintElements(dataArray, parentEl){
  dataArray.forEach((el)=> {if(el.folder){

    addFolder(parentEl,el.title);
    if(el.children){      
      let lu = addUl(parentEl);
      lu.className='subfolder-hidden';
      paintElements(el.children, lu);
    } else{
      let li =  document.createElement('li');
      li.innerHTML='<i>Folder is empty</i>';
      li.className='element subfolder-hidden';
      parentEl.append(li);
    }
  }else {
    addFile(parentEl,el.title);
  }

  }); 

let ul = addUl(document.getElementById('root'));
paintElements(data, ul);
let contextMenu= document.createElement('div');
contextMenu.innerHTML=`
<button id='rename' class='context-items' onclick='doRename()'>Rename</button>
<button id='delete' class='context-items' onClick='doDelete()'>Delete item</button>`;
contextMenu.id='context-menu';
contextMenu.className='context-menu-hidden';

document.body.append(contextMenu);
document.oncontextmenu= function(){return false;}


 