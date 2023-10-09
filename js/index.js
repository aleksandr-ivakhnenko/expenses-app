// Получение html-элементов(nodes)
const expenseNewBtnNode = document.querySelector('#expense-new-btn');
const expenseAddBtn = document.querySelector('#expense-add-btn');

const expenseAddFormNode = document.querySelector('#expense-add-form');

const selectCategorySelectedNode = document.querySelector('#select-category-selected');
const selectCategoryOptionsNode = document.querySelector('#select-category-options');
const selectCategoryOverlayNode = document.querySelector('#select-category-overlay');

// События
expenseNewBtnNode.addEventListener('click', handleExpenseNewBtnClick);
expenseAddFormNode.addEventListener('click', event => handleExpenseAddFormClick(event));

// Функции-handle, выполняемые при событиях
function handleExpenseNewBtnClick() {
    showOrHideNode(expenseAddFormNode);
};

function handleExpenseAddFormClick(event) {
    event.preventDefault();
    const eventNode = event.target;
    
    const showOrHideSelectCategoryNodes = () => {
        showOrHideNode(selectCategoryOptionsNode);
        showOrHideNode(selectCategoryOverlayNode);
    }
    
    if (eventNode === selectCategorySelectedNode || 
        eventNode === selectCategoryOverlayNode) {
            showOrHideSelectCategoryNodes();
    }
    
    if (eventNode.classList.value === 'select-category__option') {
        const optionValue = eventNode.innerText;
        selectCategorySelectedNode.innerText = optionValue;
        
        showOrHideSelectCategoryNodes();
    }
    
    if (eventNode === expenseAddBtn) {
        hideNode(expenseAddFormNode);
    }
}
    
// Функция для скрытия элемента, переданного как аргумент...
function hideNode(node) {
    node.classList.remove('visible');
}

// Функция для показа/скрытия элемента, переданного как аргумент...
function showOrHideNode(node) {
    node.classList.toggle('visible');
}

// Функция для того, что-бы в моб. версии при height = 100vh, не учитывался интерфейс браузеров...
const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
};

window.addEventListener('resize', appHeight);
appHeight();