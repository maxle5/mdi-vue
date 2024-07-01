
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSunClockOutline from "../../src/components/MdiSunClockOutline.vue";

test("MdiSunClockOutline snapshot", () => {
  const wrapper = mount(MdiSunClockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
