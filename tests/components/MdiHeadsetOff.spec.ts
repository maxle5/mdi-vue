
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadsetOff from "../../src/components/MdiHeadsetOff.vue";

test("MdiHeadsetOff snapshot", () => {
  const wrapper = mount(MdiHeadsetOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
