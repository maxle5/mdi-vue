
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLinkBoxVariantOutline from "../../src/components/MdiLinkBoxVariantOutline.vue";

test("MdiLinkBoxVariantOutline snapshot", () => {
  const wrapper = mount(MdiLinkBoxVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
