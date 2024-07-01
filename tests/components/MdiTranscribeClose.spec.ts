
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTranscribeClose from "../../src/components/MdiTranscribeClose.vue";

test("MdiTranscribeClose snapshot", () => {
  const wrapper = mount(MdiTranscribeClose, {});
  expect(wrapper.html()).toMatchSnapshot();
});
