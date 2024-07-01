
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldAlertOutline from "../../src/components/MdiShieldAlertOutline.vue";

test("MdiShieldAlertOutline snapshot", () => {
  const wrapper = mount(MdiShieldAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
