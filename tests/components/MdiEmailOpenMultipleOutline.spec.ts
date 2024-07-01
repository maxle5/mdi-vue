
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailOpenMultipleOutline from "../../src/components/MdiEmailOpenMultipleOutline.vue";

test("MdiEmailOpenMultipleOutline snapshot", () => {
  const wrapper = mount(MdiEmailOpenMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
