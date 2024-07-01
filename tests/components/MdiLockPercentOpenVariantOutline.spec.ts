
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockPercentOpenVariantOutline from "../../src/components/MdiLockPercentOpenVariantOutline.vue";

test("MdiLockPercentOpenVariantOutline snapshot", () => {
  const wrapper = mount(MdiLockPercentOpenVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
