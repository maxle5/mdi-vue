
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCastAudioVariant from "../../src/components/MdiCastAudioVariant.vue";

test("MdiCastAudioVariant snapshot", () => {
  const wrapper = mount(MdiCastAudioVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
