window.onload = () => {

    const copySignatureButton = document.getElementById('copy-signature');
    copySignatureButton.addEventListener('click', (event) => {

        const signaturePreview = document.getElementById('signature-preview')
        const signatureSelectRange = document.createRange();
        signatureSelectRange.selectNode(signaturePreview);
        window.getSelection().empty();  
        window.getSelection().addRange(signatureSelectRange);
        document.execCommand('copy');
        window.alert('The email signature is copied to clipborad!')
    });

    const createFormItemChangeListener = (signatureId) => {
        return (event) => {
        const previewBoard = document.getElementById(signatureId);
        previewBoard.innerHTML = event.target.value;
    }};
    const formItems = document.getElementsByClassName('signature-form-item');

    formItems.item(0).addEventListener('change', createFormItemChangeListener('signature-name'));
    formItems.item(1).addEventListener('change', createFormItemChangeListener('signature-role'));
    formItems.item(2).addEventListener('change', createFormItemChangeListener('signature-email'));
    formItems.item(3).addEventListener('change', createFormItemChangeListener('signature-tel'));
};