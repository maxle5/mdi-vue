
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShareVariantOutline from "../../src/components/MdiShareVariantOutline.vue";

test("MdiShareVariantOutline snapshot", () => {
  const wrapper = mount(MdiShareVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
