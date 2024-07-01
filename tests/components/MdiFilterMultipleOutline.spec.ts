
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilterMultipleOutline from "../../src/components/MdiFilterMultipleOutline.vue";

test("MdiFilterMultipleOutline snapshot", () => {
  const wrapper = mount(MdiFilterMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
