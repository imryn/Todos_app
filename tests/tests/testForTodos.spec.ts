import { test, type Page } from '@playwright/test';

import { TodosPage } from '../../pages/TodosPage'

test.beforeEach(async ({ page }) => {
    await page.goto('/examples/react/dist/#/active');
});

test.describe('New Todo', () => {
    test('item is being created and all options for todos list are being displayed', async ({ page }) => {
        // const todosPage = new TodosPage(page)

        TodosPage.addItemToDo(page)
        // TodosPage.itemCreated(page)
        // TodosPage.checkOptionsForTodos(page)
    });
})