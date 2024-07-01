
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimelineText from "../../src/components/MdiTimelineText.vue";

test("MdiTimelineText snapshot", () => {
  const wrapper = mount(MdiTimelineText, {});
  expect(wrapper.html()).toMatchSnapshot();
});
