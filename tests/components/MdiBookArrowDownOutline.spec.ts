
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookArrowDownOutline from "../../src/components/MdiBookArrowDownOutline.vue";

test("MdiBookArrowDownOutline snapshot", () => {
  const wrapper = mount(MdiBookArrowDownOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
