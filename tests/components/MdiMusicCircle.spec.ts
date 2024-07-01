
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicCircle from "../../src/components/MdiMusicCircle.vue";

test("MdiMusicCircle snapshot", () => {
  const wrapper = mount(MdiMusicCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
