
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPinwheelOutline from "../../src/components/MdiPinwheelOutline.vue";

test("MdiPinwheelOutline snapshot", () => {
  const wrapper = mount(MdiPinwheelOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
