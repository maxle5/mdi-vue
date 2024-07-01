
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountSwitchOutline from "../../src/components/MdiAccountSwitchOutline.vue";

test("MdiAccountSwitchOutline snapshot", () => {
  const wrapper = mount(MdiAccountSwitchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
