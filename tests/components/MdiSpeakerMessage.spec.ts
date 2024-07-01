
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSpeakerMessage from "../../src/components/MdiSpeakerMessage.vue";

test("MdiSpeakerMessage snapshot", () => {
  const wrapper = mount(MdiSpeakerMessage, {});
  expect(wrapper.html()).toMatchSnapshot();
});
