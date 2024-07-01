
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimelineCheckOutline from "../../src/components/MdiTimelineCheckOutline.vue";

test("MdiTimelineCheckOutline snapshot", () => {
  const wrapper = mount(MdiTimelineCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
