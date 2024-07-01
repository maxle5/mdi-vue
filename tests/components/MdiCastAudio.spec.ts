
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCastAudio from "../../src/components/MdiCastAudio.vue";

test("MdiCastAudio snapshot", () => {
  const wrapper = mount(MdiCastAudio, {});
  expect(wrapper.html()).toMatchSnapshot();
});
