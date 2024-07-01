
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimelineMinusOutline from "../../src/components/MdiTimelineMinusOutline.vue";

test("MdiTimelineMinusOutline snapshot", () => {
  const wrapper = mount(MdiTimelineMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
