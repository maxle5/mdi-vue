
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPencilMinus from "../../src/components/MdiPencilMinus.vue";

test("MdiPencilMinus snapshot", () => {
  const wrapper = mount(MdiPencilMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
