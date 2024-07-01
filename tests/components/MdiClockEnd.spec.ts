
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockEnd from "../../src/components/MdiClockEnd.vue";

test("MdiClockEnd snapshot", () => {
  const wrapper = mount(MdiClockEnd, {});
  expect(wrapper.html()).toMatchSnapshot();
});
