
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimelineCheck from "../../src/components/MdiTimelineCheck.vue";

test("MdiTimelineCheck snapshot", () => {
  const wrapper = mount(MdiTimelineCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
