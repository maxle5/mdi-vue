
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileGifBox from "../../src/components/MdiFileGifBox.vue";

test("MdiFileGifBox snapshot", () => {
  const wrapper = mount(MdiFileGifBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
