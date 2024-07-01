
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAudioInputStereoMinijack from "../../src/components/MdiAudioInputStereoMinijack.vue";

test("MdiAudioInputStereoMinijack snapshot", () => {
  const wrapper = mount(MdiAudioInputStereoMinijack, {});
  expect(wrapper.html()).toMatchSnapshot();
});
