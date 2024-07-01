
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardMultipleOutline from "../../src/components/MdiCardMultipleOutline.vue";

test("MdiCardMultipleOutline snapshot", () => {
  const wrapper = mount(MdiCardMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
