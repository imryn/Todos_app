import test from '@playwright/test';

import { TodosPage } from '../../pages/TodosPage';

test.beforeEach(async ({ page }) => {
    await page.goto('/examples/react/dist/#/active');
});

test.describe('New Todo', () => {
    test('item is being created and all options for todos list are being displayed', async ({ page }) => {
        await TodosPage.addItemToDoList(page);
        await TodosPage.itemCreated(page);
        await TodosPage.checkOptionsForTodosListSection(page);
    });

    test('edit exist item',  async ({ page }) => {
        await TodosPage.addItemToDoList(page);
        await TodosPage.editTheItem(page);
    });

    test('remove item from todos list',  async ({ page }) => {
        await TodosPage.addItemToDoList(page);
        await TodosPage.removeItemFromTodos(page);
    });

    test('create item as completed and check it is being displayed in the Completed tab',  async ({ page }) => {
        await TodosPage.addItemToDoList(page);
        await TodosPage.checkElementAsCompleted(page);
    });

    test('click clear completed after add item to todos list',  async ({ page }) => {
        await TodosPage.addItemToDoList(page);
        await TodosPage.checkElementAsCompleted(page);
        await TodosPage.clearTheTodoList(page);
    });

    test('check TodoMVC link', async ({ page }) => {
        await TodosPage.checkTodoMVCLink(page)
    });
})