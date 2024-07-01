
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTranscribe from "../../src/components/MdiTranscribe.vue";

test("MdiTranscribe snapshot", () => {
  const wrapper = mount(MdiTranscribe, {});
  expect(wrapper.html()).toMatchSnapshot();
});
