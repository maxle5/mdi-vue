
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockTimeTwelveOutline from "../../src/components/MdiClockTimeTwelveOutline.vue";

test("MdiClockTimeTwelveOutline snapshot", () => {
  const wrapper = mount(MdiClockTimeTwelveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
