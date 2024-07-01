
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPanoramaWideAngleOutline from "../../src/components/MdiPanoramaWideAngleOutline.vue";

test("MdiPanoramaWideAngleOutline snapshot", () => {
  const wrapper = mount(MdiPanoramaWideAngleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
