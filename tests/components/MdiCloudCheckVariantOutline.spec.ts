
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudCheckVariantOutline from "../../src/components/MdiCloudCheckVariantOutline.vue";

test("MdiCloudCheckVariantOutline snapshot", () => {
  const wrapper = mount(MdiCloudCheckVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
