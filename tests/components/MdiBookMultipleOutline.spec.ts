
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookMultipleOutline from "../../src/components/MdiBookMultipleOutline.vue";

test("MdiBookMultipleOutline snapshot", () => {
  const wrapper = mount(MdiBookMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
