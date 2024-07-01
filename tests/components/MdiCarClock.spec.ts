
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarClock from "../../src/components/MdiCarClock.vue";

test("MdiCarClock snapshot", () => {
  const wrapper = mount(MdiCarClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
