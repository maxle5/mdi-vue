
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFridgeVariantOff from "../../src/components/MdiFridgeVariantOff.vue";

test("MdiFridgeVariantOff snapshot", () => {
  const wrapper = mount(MdiFridgeVariantOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
