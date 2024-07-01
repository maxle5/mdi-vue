
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMidi from "../../src/components/MdiMidi.vue";

test("MdiMidi snapshot", () => {
  const wrapper = mount(MdiMidi, {});
  expect(wrapper.html()).toMatchSnapshot();
});
