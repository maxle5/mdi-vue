
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockTimeSix from "../../src/components/MdiClockTimeSix.vue";

test("MdiClockTimeSix snapshot", () => {
  const wrapper = mount(MdiClockTimeSix, {});
  expect(wrapper.html()).toMatchSnapshot();
});
