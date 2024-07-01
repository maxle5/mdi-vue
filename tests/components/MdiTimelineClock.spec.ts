
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimelineClock from "../../src/components/MdiTimelineClock.vue";

test("MdiTimelineClock snapshot", () => {
  const wrapper = mount(MdiTimelineClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
