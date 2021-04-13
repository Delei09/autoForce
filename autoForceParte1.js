
parte1
//Adicionando Icone Youtube
const tagYoutube = document.querySelector('.header__networks-list')
const tagI = document.createElement('i')
const tagA = document.createElement('a')
tagA.setAttribute('href', 'https://www.youtube.com/channel/UCLI4tg1oh_oLiJJteExJdUQ')
tagA.setAttribute('target', '_blank')
tagI.setAttribute('class', 'icon icon-youtube-header icon--small icon--hover-youtube')
tagA.append(tagI)
tagYoutube.append(tagA)

parte2

//Sem resolução

parte3
//Adicionando Select

const tagDivSelect = document.createElement('div') 
const tagSelect = document.createElement('select')
const tagOption1 = document.createElement('option')
const tagOption2 = document.createElement('option')
const tagOption3 = document.createElement('option')
const tagOption4 = document.createElement('option')
const tagFieldset =  document.querySelector('.form-conversion__body')
tagFieldset.firstElementChild.setAttribute('id', "add-form")
const addForm = document.querySelector('#add-form')
tagOption1.append('Suv')
tagOption2.append('Senda')
tagOption3.append('Hatch')
tagOption4.append('Pickup')
tagSelect.append(tagOption1,tagOption2,tagOption3,tagOption4)
tagSelect.setAttribute('class', 'form-control')
tagDivSelect.append(tagSelect)
tagDivSelect.setAttribute('class', 'form-group')
addForm.insertBefore(tagDivSelect , addForm.firstElementChild)

//Text Area

const tagDivText = document.createElement('div')
tagDivText.setAttribute('class', 'form-group')
tagTextArea = document.createElement('textarea')
tagTextArea.setAttribute('placeholder' , 'Mensagem')
tagTextArea.setAttribute('class' , 'form-control')
tagTextArea.setAttribute('row' , '3')
tagDivText.append(tagTextArea)
addForm.appendChild(tagDivText)


parte 4 

const lugar = document.querySelector('.header')
const tagImg = document.createElement('img')
const tagDivModalBody =  document.createElement('div')
const tagDivModalConteudo =  document.createElement('div')
const tagDivModalDialogo =  document.createElement('div')
const tagDivModalPrincipal =  document.createElement('div')
const tagDivPrincipal =  document.createElement('div')
const tagButton = document.createElement('button')
tagImg.setAttribute('class' , 'img-fluid' )
tagImg.setAttribute('src' , 'https://i.pinimg.com/736x/a6/85/89/a685895edca0d2e42e4de4d33e39f3c8.jpg' )
tagDivModalBody.setAttribute('class' , 'modal-body')
tagDivModalConteudo.setAttribute('class' , 'modal-content')
tagDivModalDialogo.setAttribute('class' , 'modal-dialog')
tagDivModalDialogo.setAttribute('role' , 'document')
tagDivModalPrincipal.setAttribute('role' , 'dialog')
tagDivModalPrincipal.setAttribute('tabindex' , '-1')
tagDivModalPrincipal.setAttribute('class' , 'modal fade')
tagDivModalPrincipal.setAttribute('aria-hidden' , 'true')
tagDivModalPrincipal.setAttribute('id' , 'modalPalmeiras')
tagDivModalBody.append(tagImg)
tagDivModalBody.append(tagImg)
tagDivModalConteudo.append(tagDivModalBody)
tagDivModalDialogo.append(tagDivModalConteudo)
tagDivModalPrincipal.append(tagDivModalDialogo)
tagButton.textContent = 'clique para ver o modal do palmeiras'
tagButton.setAttribute('type', 'button')
tagButton.setAttribute('class', 'btn btn-primary')
tagButton.setAttribute('data-toggle', 'modal')
tagButton.setAttribute('data-target', '#modalPalmeiras')
tagDivPrincipal.append(tagButton)
tagDivPrincipal.append(tagDivModalPrincipal)
lugar.appendChild(tagDivPrincipal)









