
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockCheckOutline from "../../src/components/MdiClockCheckOutline.vue";

test("MdiClockCheckOutline snapshot", () => {
  const wrapper = mount(MdiClockCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
