
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockIn from "../../src/components/MdiClockIn.vue";

test("MdiClockIn snapshot", () => {
  const wrapper = mount(MdiClockIn, {});
  expect(wrapper.html()).toMatchSnapshot();
});
