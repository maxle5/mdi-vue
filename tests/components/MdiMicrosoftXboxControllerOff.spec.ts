
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftXboxControllerOff from "../../src/components/MdiMicrosoftXboxControllerOff.vue";

test("MdiMicrosoftXboxControllerOff snapshot", () => {
  const wrapper = mount(MdiMicrosoftXboxControllerOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
