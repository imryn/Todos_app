import { expect, type Page } from '@playwright/test';

import { BaseEnum, KeyboardKeys } from "./baseEnum"

/** click element */
export const findElementAndClick = async (page, locator: string) => {
    await page.locator(locator).click()
}

export const haveText = async (page, locator: string, TextValue: string) => {
    await expect(page.locator(locator)).toHaveText([
        TextValue
      ]);
}

/** type something by the user */
export const findElementAndTypeInInput = async (page, locator: string, value: string) => {
    await page.locator(locator).fill(value)
}

export const findElementAndPress = async (page, locator: string, value: string) => {
    await page.locator(locator).press(value)
}

export const findElement = async (page, locator: string) => {
    await page.locator(locator).isVisible();
}

export const checkCssOfColorOnElement = async (page, locator: string, cssType: string, value: string) => {
    const element = await page.locator(locator)
    const cssValue =  await element.evaluate((el) => {
       return window.getComputedStyle(el).getPropertyValue(cssType)
    });

    return cssValue == value
}