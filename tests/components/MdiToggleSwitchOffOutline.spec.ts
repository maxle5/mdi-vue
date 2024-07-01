
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiToggleSwitchOffOutline from "../../src/components/MdiToggleSwitchOffOutline.vue";

test("MdiToggleSwitchOffOutline snapshot", () => {
  const wrapper = mount(MdiToggleSwitchOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
