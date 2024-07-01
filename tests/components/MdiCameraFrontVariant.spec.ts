
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraFrontVariant from "../../src/components/MdiCameraFrontVariant.vue";

test("MdiCameraFrontVariant snapshot", () => {
  const wrapper = mount(MdiCameraFrontVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
