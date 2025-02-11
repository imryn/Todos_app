import { Page } from '@playwright/test';
import {
    findElementAndClick, 
    findElementAndTypeInInput,
    findElementAndPress,
    findElement,
    findElementAndDoubleClick, hoverAnElement,
    checkElementIsNotExist,
    checkElementHasNewAttribute,
    checkCssOfColorOnElement,
    haveText,
    locateElementByText,
    getCurrentURL,
    domFinishLoaded} 
    from '../common/helper';

import {BaseEnum, Colors, KeyboardKeys} from '../common/baseEnum';
import {LocatorsForToDo} from '../common/locators';

const TodosPage = {
    
    todoItem: "cleaning the house",

    /** add new item to todos list */
    async addItemToDoList(page: Page) {
        await findElementAndClick(page, LocatorsForToDo.toDoInput);
        await findElementAndTypeInInput(page, LocatorsForToDo.toDoInput, this.todoItem);
        await findElementAndPress(page, LocatorsForToDo.toDoInput, KeyboardKeys.ENTER);
        await findElementAndClick(page, LocatorsForToDo.allOption);
    },
    
    /** check that the todos list section has all tab options (displayed only after you add new item) */
    async checkOptionsForTodosListSection(page: Page) {
        await findElement(page, LocatorsForToDo.itemCheckbox);
        await findElement(page, LocatorsForToDo.toDoListOptions);
        await haveText(page, LocatorsForToDo.numberOfItems, "1 item left!");
        await haveText(page, LocatorsForToDo.allOption, "All");
        await haveText(page, LocatorsForToDo.activeOption, "Active");
        await checkCssOfColorOnElement(page, LocatorsForToDo.allOption, Colors.RED);
        await haveText(page, LocatorsForToDo.completedOption, "Completed");
        await haveText(page, LocatorsForToDo.clearCompletedOption, "Clear completed");
    },
    
    /** check the item that was created is exist in the dom and has right text */
    async itemCreated(page: Page) {
        await haveText(page, LocatorsForToDo.toDoItemLabel, this.todoItem);
    },
    
    /** add item to todos list and check you can edit it */
    async editTheItem(page: Page) {
        await findElementAndDoubleClick(page, LocatorsForToDo.toDoItemLabel);
        await findElementAndTypeInInput(page, LocatorsForToDo.toDoItemLi, " updated");
        await findElementAndPress(page, LocatorsForToDo.toDoItemLi, KeyboardKeys.ENTER);
        await haveText(page, LocatorsForToDo.toDoItemLabel, `${this.todoItem} updated`);
    },
    
    /**  add item to todos list and remove it by clicking the delete icon */
    async removeItemFromTodos(page: Page) {
        await hoverAnElement(page, LocatorsForToDo.item);
        await findElement(page, LocatorsForToDo.deleteIcon);
        await findElementAndClick(page, LocatorsForToDo.deleteIcon);
        await checkElementIsNotExist(page, LocatorsForToDo.toDoItemLi);
    },

    /** check if item in todos list is being marked as completed and displayed in the completed tab */
    async checkElementAsCompleted(page: Page) {
        await haveText(page, LocatorsForToDo.numberOfItems, "1 item left!");
        await hoverAnElement(page, LocatorsForToDo.itemCheckbox);
        await findElementAndClick(page, LocatorsForToDo.itemCheckbox);
        await checkElementHasNewAttribute(page, LocatorsForToDo.toDoItemLi, 'class', BaseEnum.COMPLETED);
        await findElementAndClick(page, LocatorsForToDo.completedOption);
        await findElement(page, LocatorsForToDo.toDoItemLi);
        await haveText(page, LocatorsForToDo.numberOfItems, "0 items left!");
        await findElementAndClick(page, LocatorsForToDo.activeOption);
        await checkElementIsNotExist(page, LocatorsForToDo.toDoItemLi);
    },

    /** check the clear completed button delete checked items */
    async clearTheTodoList(page: Page) {
      await findElementAndClick(page, LocatorsForToDo.allOption);
      await findElement(page, LocatorsForToDo.toDoItemLi);
      await hoverAnElement(page, LocatorsForToDo.clearCompletedOption);
      await findElementAndClick(page, LocatorsForToDo.clearCompletedOption);
      await checkElementIsNotExist(page, LocatorsForToDo.toDoItemLi);
    },

    async checkTodoMVCLink (page: Page) {
        await locateElementByText(page, LocatorsForToDo.mvcLinkText);
        await findElementAndClick(page, LocatorsForToDo.toDoMVCLink);
        await getCurrentURL(page, 'https://todomvc.com');
        await domFinishLoaded(page);
        await findElement(page, LocatorsForToDo.toDoMVCLogo);
    }
}

export {TodosPage};