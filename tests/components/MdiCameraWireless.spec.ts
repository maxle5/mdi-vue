
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraWireless from "../../src/components/MdiCameraWireless.vue";

test("MdiCameraWireless snapshot", () => {
  const wrapper = mount(MdiCameraWireless, {});
  expect(wrapper.html()).toMatchSnapshot();
});
