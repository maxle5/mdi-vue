
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimelineClockOutline from "../../src/components/MdiTimelineClockOutline.vue";

test("MdiTimelineClockOutline snapshot", () => {
  const wrapper = mount(MdiTimelineClockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
