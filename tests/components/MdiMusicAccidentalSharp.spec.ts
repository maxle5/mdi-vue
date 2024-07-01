
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicAccidentalSharp from "../../src/components/MdiMusicAccidentalSharp.vue";

test("MdiMusicAccidentalSharp snapshot", () => {
  const wrapper = mount(MdiMusicAccidentalSharp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
