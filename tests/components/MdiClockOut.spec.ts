
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockOut from "../../src/components/MdiClockOut.vue";

test("MdiClockOut snapshot", () => {
  const wrapper = mount(MdiClockOut, {});
  expect(wrapper.html()).toMatchSnapshot();
});
