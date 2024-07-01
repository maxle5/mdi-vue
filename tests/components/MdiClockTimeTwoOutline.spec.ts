
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockTimeTwoOutline from "../../src/components/MdiClockTimeTwoOutline.vue";

test("MdiClockTimeTwoOutline snapshot", () => {
  const wrapper = mount(MdiClockTimeTwoOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
