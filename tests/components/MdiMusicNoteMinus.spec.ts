
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicNoteMinus from "../../src/components/MdiMusicNoteMinus.vue";

test("MdiMusicNoteMinus snapshot", () => {
  const wrapper = mount(MdiMusicNoteMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
