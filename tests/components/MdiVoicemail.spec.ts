
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVoicemail from "../../src/components/MdiVoicemail.vue";

test("MdiVoicemail snapshot", () => {
  const wrapper = mount(MdiVoicemail, {});
  expect(wrapper.html()).toMatchSnapshot();
});
