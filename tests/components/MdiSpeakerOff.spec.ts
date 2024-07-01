
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSpeakerOff from "../../src/components/MdiSpeakerOff.vue";

test("MdiSpeakerOff snapshot", () => {
  const wrapper = mount(MdiSpeakerOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
