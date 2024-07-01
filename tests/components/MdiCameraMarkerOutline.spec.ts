
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraMarkerOutline from "../../src/components/MdiCameraMarkerOutline.vue";

test("MdiCameraMarkerOutline snapshot", () => {
  const wrapper = mount(MdiCameraMarkerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
