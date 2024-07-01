
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeSwitchOutline from "../../src/components/MdiHomeSwitchOutline.vue";

test("MdiHomeSwitchOutline snapshot", () => {
  const wrapper = mount(MdiHomeSwitchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
