
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockFast from "../../src/components/MdiClockFast.vue";

test("MdiClockFast snapshot", () => {
  const wrapper = mount(MdiClockFast, {});
  expect(wrapper.html()).toMatchSnapshot();
});
