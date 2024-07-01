
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapClockOutline from "../../src/components/MdiMapClockOutline.vue";

test("MdiMapClockOutline snapshot", () => {
  const wrapper = mount(MdiMapClockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
