
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockTimeFive from "../../src/components/MdiClockTimeFive.vue";

test("MdiClockTimeFive snapshot", () => {
  const wrapper = mount(MdiClockTimeFive, {});
  expect(wrapper.html()).toMatchSnapshot();
});
