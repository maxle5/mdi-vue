
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimelineRemoveOutline from "../../src/components/MdiTimelineRemoveOutline.vue";

test("MdiTimelineRemoveOutline snapshot", () => {
  const wrapper = mount(MdiTimelineRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
