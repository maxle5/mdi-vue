
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountVoiceOff from "../../src/components/MdiAccountVoiceOff.vue";

test("MdiAccountVoiceOff snapshot", () => {
  const wrapper = mount(MdiAccountVoiceOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
