
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWrenchClockOutline from "../../src/components/MdiWrenchClockOutline.vue";

test("MdiWrenchClockOutline snapshot", () => {
  const wrapper = mount(MdiWrenchClockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
