
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraFront from "../../src/components/MdiCameraFront.vue";

test("MdiCameraFront snapshot", () => {
  const wrapper = mount(MdiCameraFront, {});
  expect(wrapper.html()).toMatchSnapshot();
});
