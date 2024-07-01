
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraRearVariant from "../../src/components/MdiCameraRearVariant.vue";

test("MdiCameraRearVariant snapshot", () => {
  const wrapper = mount(MdiCameraRearVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
