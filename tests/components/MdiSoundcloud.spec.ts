
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSoundcloud from "../../src/components/MdiSoundcloud.vue";

test("MdiSoundcloud snapshot", () => {
  const wrapper = mount(MdiSoundcloud, {});
  expect(wrapper.html()).toMatchSnapshot();
});
