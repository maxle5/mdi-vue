
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimelineRemove from "../../src/components/MdiTimelineRemove.vue";

test("MdiTimelineRemove snapshot", () => {
  const wrapper = mount(MdiTimelineRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
