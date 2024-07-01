
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShuffle from "../../src/components/MdiShuffle.vue";

test("MdiShuffle snapshot", () => {
  const wrapper = mount(MdiShuffle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
