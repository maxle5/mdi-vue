
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlaylistPlus from "../../src/components/MdiPlaylistPlus.vue";

test("MdiPlaylistPlus snapshot", () => {
  const wrapper = mount(MdiPlaylistPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
