
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWebcamOff from "../../src/components/MdiWebcamOff.vue";

test("MdiWebcamOff snapshot", () => {
  const wrapper = mount(MdiWebcamOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
