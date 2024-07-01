
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockOutline from "../../src/components/MdiClockOutline.vue";

test("MdiClockOutline snapshot", () => {
  const wrapper = mount(MdiClockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
