
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTelevisionSpeaker from "../../src/components/MdiTelevisionSpeaker.vue";

test("MdiTelevisionSpeaker snapshot", () => {
  const wrapper = mount(MdiTelevisionSpeaker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
