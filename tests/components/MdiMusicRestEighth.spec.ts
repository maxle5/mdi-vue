
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicRestEighth from "../../src/components/MdiMusicRestEighth.vue";

test("MdiMusicRestEighth snapshot", () => {
  const wrapper = mount(MdiMusicRestEighth, {});
  expect(wrapper.html()).toMatchSnapshot();
});
