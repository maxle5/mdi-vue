
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimelineAlertOutline from "../../src/components/MdiTimelineAlertOutline.vue";

test("MdiTimelineAlertOutline snapshot", () => {
  const wrapper = mount(MdiTimelineAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
