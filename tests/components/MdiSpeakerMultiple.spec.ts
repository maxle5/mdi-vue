
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSpeakerMultiple from "../../src/components/MdiSpeakerMultiple.vue";

test("MdiSpeakerMultiple snapshot", () => {
  const wrapper = mount(MdiSpeakerMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
