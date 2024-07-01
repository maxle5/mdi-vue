
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageMultipleOutline from "../../src/components/MdiImageMultipleOutline.vue";

test("MdiImageMultipleOutline snapshot", () => {
  const wrapper = mount(MdiImageMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
