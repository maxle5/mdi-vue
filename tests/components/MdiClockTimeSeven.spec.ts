
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockTimeSeven from "../../src/components/MdiClockTimeSeven.vue";

test("MdiClockTimeSeven snapshot", () => {
  const wrapper = mount(MdiClockTimeSeven, {});
  expect(wrapper.html()).toMatchSnapshot();
});
