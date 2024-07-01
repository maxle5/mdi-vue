
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLockOpenVariantOutline from "../../src/components/MdiLockOpenVariantOutline.vue";

test("MdiLockOpenVariantOutline snapshot", () => {
  const wrapper = mount(MdiLockOpenVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
