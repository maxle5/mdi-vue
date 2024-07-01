
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiServerMinus from "../../src/components/MdiServerMinus.vue";

test("MdiServerMinus snapshot", () => {
  const wrapper = mount(MdiServerMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
