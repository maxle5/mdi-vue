
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSunClock from "../../src/components/MdiSunClock.vue";

test("MdiSunClock snapshot", () => {
  const wrapper = mount(MdiSunClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
