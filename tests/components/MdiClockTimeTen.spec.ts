
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockTimeTen from "../../src/components/MdiClockTimeTen.vue";

test("MdiClockTimeTen snapshot", () => {
  const wrapper = mount(MdiClockTimeTen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
