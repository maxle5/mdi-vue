
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPanoramaVariantOutline from "../../src/components/MdiPanoramaVariantOutline.vue";

test("MdiPanoramaVariantOutline snapshot", () => {
  const wrapper = mount(MdiPanoramaVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
