
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountTieVoiceOff from "../../src/components/MdiAccountTieVoiceOff.vue";

test("MdiAccountTieVoiceOff snapshot", () => {
  const wrapper = mount(MdiAccountTieVoiceOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
