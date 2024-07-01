
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAmplifierOff from "../../src/components/MdiAmplifierOff.vue";

test("MdiAmplifierOff snapshot", () => {
  const wrapper = mount(MdiAmplifierOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
