
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicCircleOutline from "../../src/components/MdiMusicCircleOutline.vue";

test("MdiMusicCircleOutline snapshot", () => {
  const wrapper = mount(MdiMusicCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
