
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraOutline from "../../src/components/MdiCameraOutline.vue";

test("MdiCameraOutline snapshot", () => {
  const wrapper = mount(MdiCameraOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
