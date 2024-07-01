
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPianoOff from "../../src/components/MdiPianoOff.vue";

test("MdiPianoOff snapshot", () => {
  const wrapper = mount(MdiPianoOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
