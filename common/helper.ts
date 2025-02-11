import { expect, Page } from '@playwright/test';

import { BaseEnum, KeyboardKeys } from "./baseEnum"

/** click element */
export const findElementAndClick = async (page: Page, locator: string) => {
    await page.locator(locator).click()
}

export const haveText = async (page, locator: string, TextValue: string) => {
    await expect(page.locator(locator)).toHaveText([
        TextValue
      ]);
}

/** type something by the user */
export const findElementAndTypeInInput = async (page, locator: string, textValue: string) => {
    await page.locator(locator).type(textValue);
}

export const findElementAndPress = async (page: Page, locator: string, value: string) => {
    await page.locator(locator).press(value);
}

export const findElement = async (page: Page, locator: string) => {
    await page.locator(locator).isVisible();
}

export const checkCssOfColorOnElement = async (page: Page, locator: string, value: string) => {
    const element = await page.locator(locator);
    const cssValue =  await element.evaluate((el) => {
       return window.getComputedStyle(el).getPropertyValue('border-color');
    });
    expect(cssValue).toBe(value);
}

export const findElementAndDoubleClick = async (page: Page, locator: string) => {
    await page.locator(locator).dblclick()
}

export const hoverAnElement = async (page: Page, locator: string) => {
    await page.locator(locator).hover()
}

export const checkElementIsNotExist = async (page: Page, locator: string) => {
    expect(page.locator(locator)).toHaveCount(0);
}

export const checkElementHasNewAttribute = async (page: Page, locator: string, attribute: string, attributeValue: string) => {
    const element = await page.locator(locator)
    const value = await element.getAttribute(attribute)
    expect(value).toBe(attributeValue)
}

export const locateElementByText = async (page: Page, textValue: string) => {
    await expect(page.getByText(textValue)).toBeVisible()
}

export const getCurrentURL = async (page: Page, textValue: string) => {
    await expect(page).toHaveURL(textValue)
}

export const domFinishLoaded = async (page: Page) => {
    await page.waitForLoadState('domcontentloaded');
}