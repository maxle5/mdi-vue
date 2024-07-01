
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTelevisionClassicOff from "../../src/components/MdiTelevisionClassicOff.vue";

test("MdiTelevisionClassicOff snapshot", () => {
  const wrapper = mount(MdiTelevisionClassicOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
