
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRemoteOff from "../../src/components/MdiRemoteOff.vue";

test("MdiRemoteOff snapshot", () => {
  const wrapper = mount(MdiRemoteOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
