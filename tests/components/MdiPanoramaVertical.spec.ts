
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPanoramaVertical from "../../src/components/MdiPanoramaVertical.vue";

test("MdiPanoramaVertical snapshot", () => {
  const wrapper = mount(MdiPanoramaVertical, {});
  expect(wrapper.html()).toMatchSnapshot();
});
