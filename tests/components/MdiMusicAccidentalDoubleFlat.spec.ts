
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicAccidentalDoubleFlat from "../../src/components/MdiMusicAccidentalDoubleFlat.vue";

test("MdiMusicAccidentalDoubleFlat snapshot", () => {
  const wrapper = mount(MdiMusicAccidentalDoubleFlat, {});
  expect(wrapper.html()).toMatchSnapshot();
});
