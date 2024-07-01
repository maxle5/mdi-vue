
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrackpad from "../../src/components/MdiTrackpad.vue";

test("MdiTrackpad snapshot", () => {
  const wrapper = mount(MdiTrackpad, {});
  expect(wrapper.html()).toMatchSnapshot();
});
