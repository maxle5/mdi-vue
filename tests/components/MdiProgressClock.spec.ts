
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiProgressClock from "../../src/components/MdiProgressClock.vue";

test("MdiProgressClock snapshot", () => {
  const wrapper = mount(MdiProgressClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
