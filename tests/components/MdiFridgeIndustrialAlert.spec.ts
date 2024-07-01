
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFridgeIndustrialAlert from "../../src/components/MdiFridgeIndustrialAlert.vue";

test("MdiFridgeIndustrialAlert snapshot", () => {
  const wrapper = mount(MdiFridgeIndustrialAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
