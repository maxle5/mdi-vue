
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyMinus from "../../src/components/MdiKeyMinus.vue";

test("MdiKeyMinus snapshot", () => {
  const wrapper = mount(MdiKeyMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
