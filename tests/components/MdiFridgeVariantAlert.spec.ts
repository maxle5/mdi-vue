
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFridgeVariantAlert from "../../src/components/MdiFridgeVariantAlert.vue";

test("MdiFridgeVariantAlert snapshot", () => {
  const wrapper = mount(MdiFridgeVariantAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
