
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPanoramaSphereOutline from "../../src/components/MdiPanoramaSphereOutline.vue";

test("MdiPanoramaSphereOutline snapshot", () => {
  const wrapper = mount(MdiPanoramaSphereOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
