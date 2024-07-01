
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrophonePlus from "../../src/components/MdiMicrophonePlus.vue";

test("MdiMicrophonePlus snapshot", () => {
  const wrapper = mount(MdiMicrophonePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
