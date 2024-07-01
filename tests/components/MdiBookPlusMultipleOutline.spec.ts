
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookPlusMultipleOutline from "../../src/components/MdiBookPlusMultipleOutline.vue";

test("MdiBookPlusMultipleOutline snapshot", () => {
  const wrapper = mount(MdiBookPlusMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
