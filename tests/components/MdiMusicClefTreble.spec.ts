
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicClefTreble from "../../src/components/MdiMusicClefTreble.vue";

test("MdiMusicClefTreble snapshot", () => {
  const wrapper = mount(MdiMusicClefTreble, {});
  expect(wrapper.html()).toMatchSnapshot();
});
