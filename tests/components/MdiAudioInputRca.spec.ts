
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAudioInputRca from "../../src/components/MdiAudioInputRca.vue";

test("MdiAudioInputRca snapshot", () => {
  const wrapper = mount(MdiAudioInputRca, {});
  expect(wrapper.html()).toMatchSnapshot();
});
