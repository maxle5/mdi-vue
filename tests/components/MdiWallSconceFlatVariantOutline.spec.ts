
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWallSconceFlatVariantOutline from "../../src/components/MdiWallSconceFlatVariantOutline.vue";

test("MdiWallSconceFlatVariantOutline snapshot", () => {
  const wrapper = mount(MdiWallSconceFlatVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
