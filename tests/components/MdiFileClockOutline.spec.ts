
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileClockOutline from "../../src/components/MdiFileClockOutline.vue";

test("MdiFileClockOutline snapshot", () => {
  const wrapper = mount(MdiFileClockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
