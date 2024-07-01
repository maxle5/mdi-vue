
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSpeakerPause from "../../src/components/MdiSpeakerPause.vue";

test("MdiSpeakerPause snapshot", () => {
  const wrapper = mount(MdiSpeakerPause, {});
  expect(wrapper.html()).toMatchSnapshot();
});
