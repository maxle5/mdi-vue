
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLabelVariantOutline from "../../src/components/MdiLabelVariantOutline.vue";

test("MdiLabelVariantOutline snapshot", () => {
  const wrapper = mount(MdiLabelVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
