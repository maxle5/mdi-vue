
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAudioVideoOff from "../../src/components/MdiAudioVideoOff.vue";

test("MdiAudioVideoOff snapshot", () => {
  const wrapper = mount(MdiAudioVideoOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
