
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilterMinus from "../../src/components/MdiFilterMinus.vue";

test("MdiFilterMinus snapshot", () => {
  const wrapper = mount(MdiFilterMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
