import React from "react";
import {mount} from "enzyme";
import SettingsProvider, {themeContext} from "./SettingsProvider";

describe("Theme provider", function () {
    test("Should get image", () => {
        const wrap = mount(
            <SettingsProvider>
                <themeContext.Consumer>
                    {value => {
                        expect(Object.keys(value.image.list)).toEqual(['sidebar-1', 'sidebar-2', 'sidebar-3', 'sidebar-4']);
                        expect(value.image.current).toBe("sidebar-2");
                    }}
                </themeContext.Consumer>
            </SettingsProvider>
        );
    });

    test("Should set image", () => {
        let update;

        const wrap = mount(
            <SettingsProvider>
                <themeContext.Consumer>
                    {value => {
                        update = value.image.setImage
                    }}
                </themeContext.Consumer>
            </SettingsProvider>
        );

        update("sidebar-3");
    });
});
