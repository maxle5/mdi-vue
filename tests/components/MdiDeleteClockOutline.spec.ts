
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDeleteClockOutline from "../../src/components/MdiDeleteClockOutline.vue";

test("MdiDeleteClockOutline snapshot", () => {
  const wrapper = mount(MdiDeleteClockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
