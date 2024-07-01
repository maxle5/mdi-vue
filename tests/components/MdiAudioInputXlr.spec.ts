
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAudioInputXlr from "../../src/components/MdiAudioInputXlr.vue";

test("MdiAudioInputXlr snapshot", () => {
  const wrapper = mount(MdiAudioInputXlr, {});
  expect(wrapper.html()).toMatchSnapshot();
});
