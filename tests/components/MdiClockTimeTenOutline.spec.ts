
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockTimeTenOutline from "../../src/components/MdiClockTimeTenOutline.vue";

test("MdiClockTimeTenOutline snapshot", () => {
  const wrapper = mount(MdiClockTimeTenOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
