
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookArrowUpOutline from "../../src/components/MdiBookArrowUpOutline.vue";

test("MdiBookArrowUpOutline snapshot", () => {
  const wrapper = mount(MdiBookArrowUpOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
