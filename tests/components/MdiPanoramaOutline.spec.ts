
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPanoramaOutline from "../../src/components/MdiPanoramaOutline.vue";

test("MdiPanoramaOutline snapshot", () => {
  const wrapper = mount(MdiPanoramaOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
