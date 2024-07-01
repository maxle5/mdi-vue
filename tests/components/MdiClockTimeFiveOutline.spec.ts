
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockTimeFiveOutline from "../../src/components/MdiClockTimeFiveOutline.vue";

test("MdiClockTimeFiveOutline snapshot", () => {
  const wrapper = mount(MdiClockTimeFiveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
