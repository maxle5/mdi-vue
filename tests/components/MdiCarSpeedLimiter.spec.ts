
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarSpeedLimiter from "../../src/components/MdiCarSpeedLimiter.vue";

test("MdiCarSpeedLimiter snapshot", () => {
  const wrapper = mount(MdiCarSpeedLimiter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
