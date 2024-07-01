
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageMinus from "../../src/components/MdiImageMinus.vue";

test("MdiImageMinus snapshot", () => {
  const wrapper = mount(MdiImageMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
