
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFridgeAlert from "../../src/components/MdiFridgeAlert.vue";

test("MdiFridgeAlert snapshot", () => {
  const wrapper = mount(MdiFridgeAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
