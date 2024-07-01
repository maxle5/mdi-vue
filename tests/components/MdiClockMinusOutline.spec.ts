
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockMinusOutline from "../../src/components/MdiClockMinusOutline.vue";

test("MdiClockMinusOutline snapshot", () => {
  const wrapper = mount(MdiClockMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
