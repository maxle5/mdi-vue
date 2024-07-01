
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPanoramaVariant from "../../src/components/MdiPanoramaVariant.vue";

test("MdiPanoramaVariant snapshot", () => {
  const wrapper = mount(MdiPanoramaVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
