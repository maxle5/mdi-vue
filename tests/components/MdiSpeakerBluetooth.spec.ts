
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSpeakerBluetooth from "../../src/components/MdiSpeakerBluetooth.vue";

test("MdiSpeakerBluetooth snapshot", () => {
  const wrapper = mount(MdiSpeakerBluetooth, {});
  expect(wrapper.html()).toMatchSnapshot();
});
