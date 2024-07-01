
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWrenchClock from "../../src/components/MdiWrenchClock.vue";

test("MdiWrenchClock snapshot", () => {
  const wrapper = mount(MdiWrenchClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
