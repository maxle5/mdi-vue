
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSmokeDetectorVariantAlert from "../../src/components/MdiSmokeDetectorVariantAlert.vue";

test("MdiSmokeDetectorVariantAlert snapshot", () => {
  const wrapper = mount(MdiSmokeDetectorVariantAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
