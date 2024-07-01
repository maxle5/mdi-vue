
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockDigital from "../../src/components/MdiClockDigital.vue";

test("MdiClockDigital snapshot", () => {
  const wrapper = mount(MdiClockDigital, {});
  expect(wrapper.html()).toMatchSnapshot();
});
