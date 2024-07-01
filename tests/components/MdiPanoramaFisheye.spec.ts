
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPanoramaFisheye from "../../src/components/MdiPanoramaFisheye.vue";

test("MdiPanoramaFisheye snapshot", () => {
  const wrapper = mount(MdiPanoramaFisheye, {});
  expect(wrapper.html()).toMatchSnapshot();
});
