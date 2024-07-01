
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFridgeVariantOffOutline from "../../src/components/MdiFridgeVariantOffOutline.vue";

test("MdiFridgeVariantOffOutline snapshot", () => {
  const wrapper = mount(MdiFridgeVariantOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
