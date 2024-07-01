
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCakeVariantOutline from "../../src/components/MdiCakeVariantOutline.vue";

test("MdiCakeVariantOutline snapshot", () => {
  const wrapper = mount(MdiCakeVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
