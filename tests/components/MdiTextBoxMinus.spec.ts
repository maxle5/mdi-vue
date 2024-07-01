
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTextBoxMinus from "../../src/components/MdiTextBoxMinus.vue";

test("MdiTextBoxMinus snapshot", () => {
  const wrapper = mount(MdiTextBoxMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
