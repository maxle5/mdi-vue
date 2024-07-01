
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPanoramaVerticalOutline from "../../src/components/MdiPanoramaVerticalOutline.vue";

test("MdiPanoramaVerticalOutline snapshot", () => {
  const wrapper = mount(MdiPanoramaVerticalOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
