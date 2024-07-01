
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockRemoveOutline from "../../src/components/MdiClockRemoveOutline.vue";

test("MdiClockRemoveOutline snapshot", () => {
  const wrapper = mount(MdiClockRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
