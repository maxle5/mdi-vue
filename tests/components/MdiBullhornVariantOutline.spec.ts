
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBullhornVariantOutline from "../../src/components/MdiBullhornVariantOutline.vue";

test("MdiBullhornVariantOutline snapshot", () => {
  const wrapper = mount(MdiBullhornVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
