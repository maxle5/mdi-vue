
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicRestWhole from "../../src/components/MdiMusicRestWhole.vue";

test("MdiMusicRestWhole snapshot", () => {
  const wrapper = mount(MdiMusicRestWhole, {});
  expect(wrapper.html()).toMatchSnapshot();
});
