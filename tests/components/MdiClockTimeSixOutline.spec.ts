
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockTimeSixOutline from "../../src/components/MdiClockTimeSixOutline.vue";

test("MdiClockTimeSixOutline snapshot", () => {
  const wrapper = mount(MdiClockTimeSixOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
