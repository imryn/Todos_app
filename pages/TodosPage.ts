import {
    findElementAndClick, 
    findElementAndTypeInInput,
    findElementAndPress,
    findElement,
    // findElementAndDoubleClick, hoverAnElement,
    // itemIsVisible,
    // checkElementHasNewAttribute,
    checkCssOfColorOnElement,
    haveText} 
    from '../common/helper';

import {BaseEnum, Colors, KeyboardKeys} from '../common/baseEnum';
import {LocatorsForToDo} from '../common/locators';


const TodosPage = {
    
    todoItem: "cleaning the house",

    /** add new item to todos list */
    addItemToDo: function addItemToDoList(page): void {
        findElementAndClick(page, LocatorsForToDo.toDoInput);
        findElementAndTypeInInput(page, LocatorsForToDo.toDoInput, this.todoItem);
        findElementAndPress(page, LocatorsForToDo.toDoInput, KeyboardKeys.ENTER);
        findElementAndClick(page, LocatorsForToDo.allOption);
    },
    
    /** check that the todos list section has all tab options (displayed only after you add new item) */
    checkOptionsForTodos: function checkOptionsForTodosListSection(page): void {
        findElement(page, LocatorsForToDo.itemCheckbox);
        findElement(page, LocatorsForToDo.toDoListOptions);
        haveText(page, LocatorsForToDo.numberOfItems, "1 item left!");
        haveText(page, LocatorsForToDo.allOption, "All");
        haveText(page, LocatorsForToDo.activeOption, "Active");
        checkCssOfColorOnElement(page, LocatorsForToDo.allOption, 'border-color', Colors.RED);
        haveText(page, LocatorsForToDo.completedOption, "Completed");
        haveText(page, LocatorsForToDo.clearCompletedOption, "Clear completed");
    },
    
    /** check the item that was created is exist in the dom and has right text */
    itemCreated: function itemCreated(page): void {
        haveText(page, LocatorsForToDo.toDoItemLabel, this.todoItem);
    }
    
    /** add item to todos list and check you can edit it */
    // editTheItem(): void {
    //         findElementAndDoubleClick(LocatorsForToDo.toDoItemLabel);
    //         findElementAndShould(LocatorsForToDo.inputContainer, BaseEnum.EXIST);
    //         findElementAndType(LocatorsForToDo.toDoItemLi, " updated");
    //         findElementAndType(LocatorsForToDo.toDoItemLi, KeyboardKeys.ENTER);
    //         haveText(LocatorsForToDo.toDoItemLabel, `${this.todoItem} updated`, BaseEnum.EXIST);
    // }
    
    /**  add item to todos list and remove it by clicking the delete icon */
    // removeItemFromTodos(): void {
    //         hoverAnElement(LocatorsForToDo.item, KeyboardKeys.HOVER);
    //         itemIsVisible(LocatorsForToDo.deleteIcon);
    //         findElementAndClick(LocatorsForToDo.deleteIcon)
    //         findElementAndShould(LocatorsForToDo.toDoItemLi, BaseEnum.NOT_EXIST);
    // }

    /** check if item in todos list is being marked as completed and displayed in the completed tab */
    // checkElementAsCompleted(): void {
    //     haveText(LocatorsForToDo.numberOfItems, "1 item left!", BaseEnum.EXIST);
    //     hoverAnElement(LocatorsForToDo.itemCheckbox, KeyboardKeys.HOVER);
    //     findElementAndClick(LocatorsForToDo.itemCheckbox);
    //     checkElementHasNewAttribute(LocatorsForToDo.toDoItemLi, BaseEnum.COMPLETED);
    //     findElementAndClick(LocatorsForToDo.completedOption);
    //     findElementAndShould(LocatorsForToDo.toDoItemLi, BaseEnum.EXIST);
    //     haveText(LocatorsForToDo.numberOfItems, "0 items left!", BaseEnum.EXIST);
    //     findElementAndClick(LocatorsForToDo.activeOption);
    //     findElementAndShould(LocatorsForToDo.toDoItemLi, BaseEnum.NOT_EXIST);
    // }

    /** check the clear completed button delete checked items */
    // clearTheTodoList(): void {
    //     findElementAndClick(LocatorsForToDo.allOption);
    //     findElementAndShould(LocatorsForToDo.toDoItemLi, BaseEnum.EXIST);
    //     hoverAnElement(LocatorsForToDo.clearCompletedOption, KeyboardKeys.HOVER);
    //     findElementAndClick(LocatorsForToDo.clearCompletedOption);
    //     findElementAndShould(LocatorsForToDo.toDoItemLi, BaseEnum.NOT_EXIST);
    // }
}

export {TodosPage};