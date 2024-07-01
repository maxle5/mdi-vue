
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerMinusOutline from "../../src/components/MdiTimerMinusOutline.vue";

test("MdiTimerMinusOutline snapshot", () => {
  const wrapper = mount(MdiTimerMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
