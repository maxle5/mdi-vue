
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWebMinus from "../../src/components/MdiWebMinus.vue";

test("MdiWebMinus snapshot", () => {
  const wrapper = mount(MdiWebMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
