
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPanoramaHorizontalOutline from "../../src/components/MdiPanoramaHorizontalOutline.vue";

test("MdiPanoramaHorizontalOutline snapshot", () => {
  const wrapper = mount(MdiPanoramaHorizontalOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
