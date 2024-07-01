
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStickerEmoji from "../../src/components/MdiStickerEmoji.vue";

test("MdiStickerEmoji snapshot", () => {
  const wrapper = mount(MdiStickerEmoji, {});
  expect(wrapper.html()).toMatchSnapshot();
});
