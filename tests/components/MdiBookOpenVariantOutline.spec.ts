
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookOpenVariantOutline from "../../src/components/MdiBookOpenVariantOutline.vue";

test("MdiBookOpenVariantOutline snapshot", () => {
  const wrapper = mount(MdiBookOpenVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
