
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraWirelessOutline from "../../src/components/MdiCameraWirelessOutline.vue";

test("MdiCameraWirelessOutline snapshot", () => {
  const wrapper = mount(MdiCameraWirelessOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
