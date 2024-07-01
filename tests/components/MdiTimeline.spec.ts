
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimeline from "../../src/components/MdiTimeline.vue";

test("MdiTimeline snapshot", () => {
  const wrapper = mount(MdiTimeline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
