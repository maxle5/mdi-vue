
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookOpenPageVariantOutline from "../../src/components/MdiBookOpenPageVariantOutline.vue";

test("MdiBookOpenPageVariantOutline snapshot", () => {
  const wrapper = mount(MdiBookOpenPageVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
