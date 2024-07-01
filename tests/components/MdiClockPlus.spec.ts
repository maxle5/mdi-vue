
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockPlus from "../../src/components/MdiClockPlus.vue";

test("MdiClockPlus snapshot", () => {
  const wrapper = mount(MdiClockPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
