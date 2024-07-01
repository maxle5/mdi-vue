
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSpeakerWireless from "../../src/components/MdiSpeakerWireless.vue";

test("MdiSpeakerWireless snapshot", () => {
  const wrapper = mount(MdiSpeakerWireless, {});
  expect(wrapper.html()).toMatchSnapshot();
});
