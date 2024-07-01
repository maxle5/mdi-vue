
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageTextClockOutline from "../../src/components/MdiMessageTextClockOutline.vue";

test("MdiMessageTextClockOutline snapshot", () => {
  const wrapper = mount(MdiMessageTextClockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
