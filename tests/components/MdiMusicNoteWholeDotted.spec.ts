
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicNoteWholeDotted from "../../src/components/MdiMusicNoteWholeDotted.vue";

test("MdiMusicNoteWholeDotted snapshot", () => {
  const wrapper = mount(MdiMusicNoteWholeDotted, {});
  expect(wrapper.html()).toMatchSnapshot();
});
