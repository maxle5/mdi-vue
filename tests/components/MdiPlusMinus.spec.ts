
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlusMinus from "../../src/components/MdiPlusMinus.vue";

test("MdiPlusMinus snapshot", () => {
  const wrapper = mount(MdiPlusMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
