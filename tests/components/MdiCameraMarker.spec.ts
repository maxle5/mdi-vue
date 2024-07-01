
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraMarker from "../../src/components/MdiCameraMarker.vue";

test("MdiCameraMarker snapshot", () => {
  const wrapper = mount(MdiCameraMarker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
