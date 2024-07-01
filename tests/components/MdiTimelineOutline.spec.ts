
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimelineOutline from "../../src/components/MdiTimelineOutline.vue";

test("MdiTimelineOutline snapshot", () => {
  const wrapper = mount(MdiTimelineOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
