
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockPlusOutline from "../../src/components/MdiClockPlusOutline.vue";

test("MdiClockPlusOutline snapshot", () => {
  const wrapper = mount(MdiClockPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
