
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloseBoxMultipleOutline from "../../src/components/MdiCloseBoxMultipleOutline.vue";

test("MdiCloseBoxMultipleOutline snapshot", () => {
  const wrapper = mount(MdiCloseBoxMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
