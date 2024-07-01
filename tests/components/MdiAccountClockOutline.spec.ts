
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountClockOutline from "../../src/components/MdiAccountClockOutline.vue";

test("MdiAccountClockOutline snapshot", () => {
  const wrapper = mount(MdiAccountClockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
