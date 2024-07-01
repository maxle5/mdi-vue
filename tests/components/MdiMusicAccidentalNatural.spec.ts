
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicAccidentalNatural from "../../src/components/MdiMusicAccidentalNatural.vue";

test("MdiMusicAccidentalNatural snapshot", () => {
  const wrapper = mount(MdiMusicAccidentalNatural, {});
  expect(wrapper.html()).toMatchSnapshot();
});
