export default function Modal(){
    const cancelButton = document.querySelector('.button.cancel')
    cancelButton.addEventListener('click', close)

    const modalWrapper = document.querySelector('.modal-wrapper')
    function open(){
        // funcionalidade de atribuir a classe active para a modal
        modalWrapper.classList.add('active')
    }
    function close(){
        // funcionalidade de remover a classe active para a modal
        modalWrapper.classList.remove('active')
    }

    return{
        open,
        close
    }
}