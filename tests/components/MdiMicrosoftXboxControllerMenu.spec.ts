
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftXboxControllerMenu from "../../src/components/MdiMicrosoftXboxControllerMenu.vue";

test("MdiMicrosoftXboxControllerMenu snapshot", () => {
  const wrapper = mount(MdiMicrosoftXboxControllerMenu, {});
  expect(wrapper.html()).toMatchSnapshot();
});
