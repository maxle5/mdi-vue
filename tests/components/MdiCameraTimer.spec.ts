
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraTimer from "../../src/components/MdiCameraTimer.vue";

test("MdiCameraTimer snapshot", () => {
  const wrapper = mount(MdiCameraTimer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
