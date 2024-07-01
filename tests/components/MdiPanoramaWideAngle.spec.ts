
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPanoramaWideAngle from "../../src/components/MdiPanoramaWideAngle.vue";

test("MdiPanoramaWideAngle snapshot", () => {
  const wrapper = mount(MdiPanoramaWideAngle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
