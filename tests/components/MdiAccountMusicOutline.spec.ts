
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountMusicOutline from "../../src/components/MdiAccountMusicOutline.vue";

test("MdiAccountMusicOutline snapshot", () => {
  const wrapper = mount(MdiAccountMusicOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
