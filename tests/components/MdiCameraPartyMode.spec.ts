
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraPartyMode from "../../src/components/MdiCameraPartyMode.vue";

test("MdiCameraPartyMode snapshot", () => {
  const wrapper = mount(MdiCameraPartyMode, {});
  expect(wrapper.html()).toMatchSnapshot();
});
