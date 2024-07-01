
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFridgeAlertOutline from "../../src/components/MdiFridgeAlertOutline.vue";

test("MdiFridgeAlertOutline snapshot", () => {
  const wrapper = mount(MdiFridgeAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
