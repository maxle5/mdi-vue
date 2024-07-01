
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWebrtc from "../../src/components/MdiWebrtc.vue";

test("MdiWebrtc snapshot", () => {
  const wrapper = mount(MdiWebrtc, {});
  expect(wrapper.html()).toMatchSnapshot();
});
