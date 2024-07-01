
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudRefreshVariantOutline from "../../src/components/MdiCloudRefreshVariantOutline.vue";

test("MdiCloudRefreshVariantOutline snapshot", () => {
  const wrapper = mount(MdiCloudRefreshVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
