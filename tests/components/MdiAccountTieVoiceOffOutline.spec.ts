
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountTieVoiceOffOutline from "../../src/components/MdiAccountTieVoiceOffOutline.vue";

test("MdiAccountTieVoiceOffOutline snapshot", () => {
  const wrapper = mount(MdiAccountTieVoiceOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
