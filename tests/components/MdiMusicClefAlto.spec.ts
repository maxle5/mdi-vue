
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicClefAlto from "../../src/components/MdiMusicClefAlto.vue";

test("MdiMusicClefAlto snapshot", () => {
  const wrapper = mount(MdiMusicClefAlto, {});
  expect(wrapper.html()).toMatchSnapshot();
});
