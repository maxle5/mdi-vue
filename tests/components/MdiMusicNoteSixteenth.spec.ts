
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicNoteSixteenth from "../../src/components/MdiMusicNoteSixteenth.vue";

test("MdiMusicNoteSixteenth snapshot", () => {
  const wrapper = mount(MdiMusicNoteSixteenth, {});
  expect(wrapper.html()).toMatchSnapshot();
});
