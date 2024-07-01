
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSpeaker from "../../src/components/MdiSpeaker.vue";

test("MdiSpeaker snapshot", () => {
  const wrapper = mount(MdiSpeaker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
