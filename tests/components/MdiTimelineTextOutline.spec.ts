
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimelineTextOutline from "../../src/components/MdiTimelineTextOutline.vue";

test("MdiTimelineTextOutline snapshot", () => {
  const wrapper = mount(MdiTimelineTextOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
