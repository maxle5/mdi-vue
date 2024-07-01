
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAudioVideo from "../../src/components/MdiAudioVideo.vue";

test("MdiAudioVideo snapshot", () => {
  const wrapper = mount(MdiAudioVideo, {});
  expect(wrapper.html()).toMatchSnapshot();
});
