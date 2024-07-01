
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMinus from "../../src/components/MdiMinus.vue";

test("MdiMinus snapshot", () => {
  const wrapper = mount(MdiMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
