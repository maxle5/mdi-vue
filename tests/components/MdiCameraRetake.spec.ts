
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraRetake from "../../src/components/MdiCameraRetake.vue";

test("MdiCameraRetake snapshot", () => {
  const wrapper = mount(MdiCameraRetake, {});
  expect(wrapper.html()).toMatchSnapshot();
});
