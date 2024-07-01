
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockEditOutline from "../../src/components/MdiClockEditOutline.vue";

test("MdiClockEditOutline snapshot", () => {
  const wrapper = mount(MdiClockEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
