
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFridgeVariantOutline from "../../src/components/MdiFridgeVariantOutline.vue";

test("MdiFridgeVariantOutline snapshot", () => {
  const wrapper = mount(MdiFridgeVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
