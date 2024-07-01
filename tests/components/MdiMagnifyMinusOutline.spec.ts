
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMagnifyMinusOutline from "../../src/components/MdiMagnifyMinusOutline.vue";

test("MdiMagnifyMinusOutline snapshot", () => {
  const wrapper = mount(MdiMagnifyMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
