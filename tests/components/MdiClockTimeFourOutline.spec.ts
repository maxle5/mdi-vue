
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockTimeFourOutline from "../../src/components/MdiClockTimeFourOutline.vue";

test("MdiClockTimeFourOutline snapshot", () => {
  const wrapper = mount(MdiClockTimeFourOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
