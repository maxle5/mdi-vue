
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicAccidentalFlat from "../../src/components/MdiMusicAccidentalFlat.vue";

test("MdiMusicAccidentalFlat snapshot", () => {
  const wrapper = mount(MdiMusicAccidentalFlat, {});
  expect(wrapper.html()).toMatchSnapshot();
});
