
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTelevisionOff from "../../src/components/MdiTelevisionOff.vue";

test("MdiTelevisionOff snapshot", () => {
  const wrapper = mount(MdiTelevisionOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
