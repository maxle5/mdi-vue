
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicRestHalf from "../../src/components/MdiMusicRestHalf.vue";

test("MdiMusicRestHalf snapshot", () => {
  const wrapper = mount(MdiMusicRestHalf, {});
  expect(wrapper.html()).toMatchSnapshot();
});
