
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraLock from "../../src/components/MdiCameraLock.vue";

test("MdiCameraLock snapshot", () => {
  const wrapper = mount(MdiCameraLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
