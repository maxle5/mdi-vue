
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicRestSixteenth from "../../src/components/MdiMusicRestSixteenth.vue";

test("MdiMusicRestSixteenth snapshot", () => {
  const wrapper = mount(MdiMusicRestSixteenth, {});
  expect(wrapper.html()).toMatchSnapshot();
});
