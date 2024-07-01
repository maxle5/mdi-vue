
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSpeakerPlay from "../../src/components/MdiSpeakerPlay.vue";

test("MdiSpeakerPlay snapshot", () => {
  const wrapper = mount(MdiSpeakerPlay, {});
  expect(wrapper.html()).toMatchSnapshot();
});
