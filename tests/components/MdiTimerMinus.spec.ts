
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerMinus from "../../src/components/MdiTimerMinus.vue";

test("MdiTimerMinus snapshot", () => {
  const wrapper = mount(MdiTimerMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
