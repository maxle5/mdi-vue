
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTelevisionSpeakerOff from "../../src/components/MdiTelevisionSpeakerOff.vue";

test("MdiTelevisionSpeakerOff snapshot", () => {
  const wrapper = mount(MdiTelevisionSpeakerOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
