
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockTimeFour from "../../src/components/MdiClockTimeFour.vue";

test("MdiClockTimeFour snapshot", () => {
  const wrapper = mount(MdiClockTimeFour, {});
  expect(wrapper.html()).toMatchSnapshot();
});
