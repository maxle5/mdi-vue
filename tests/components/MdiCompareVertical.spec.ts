
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCompareVertical from "../../src/components/MdiCompareVertical.vue";

test("MdiCompareVertical snapshot", () => {
  const wrapper = mount(MdiCompareVertical, {});
  expect(wrapper.html()).toMatchSnapshot();
});
