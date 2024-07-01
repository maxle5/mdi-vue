
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicNotePlus from "../../src/components/MdiMusicNotePlus.vue";

test("MdiMusicNotePlus snapshot", () => {
  const wrapper = mount(MdiMusicNotePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
