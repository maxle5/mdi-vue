
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountTieVoiceOutline from "../../src/components/MdiAccountTieVoiceOutline.vue";

test("MdiAccountTieVoiceOutline snapshot", () => {
  const wrapper = mount(MdiAccountTieVoiceOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
