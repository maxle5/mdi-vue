
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapClock from "../../src/components/MdiMapClock.vue";

test("MdiMapClock snapshot", () => {
  const wrapper = mount(MdiMapClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
