
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraSwitchOutline from "../../src/components/MdiCameraSwitchOutline.vue";

test("MdiCameraSwitchOutline snapshot", () => {
  const wrapper = mount(MdiCameraSwitchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
