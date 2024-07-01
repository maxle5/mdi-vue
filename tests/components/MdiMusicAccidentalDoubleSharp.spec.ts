
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicAccidentalDoubleSharp from "../../src/components/MdiMusicAccidentalDoubleSharp.vue";

test("MdiMusicAccidentalDoubleSharp snapshot", () => {
  const wrapper = mount(MdiMusicAccidentalDoubleSharp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
