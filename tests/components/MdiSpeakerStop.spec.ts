
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSpeakerStop from "../../src/components/MdiSpeakerStop.vue";

test("MdiSpeakerStop snapshot", () => {
  const wrapper = mount(MdiSpeakerStop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
