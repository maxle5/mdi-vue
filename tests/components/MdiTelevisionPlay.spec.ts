
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTelevisionPlay from "../../src/components/MdiTelevisionPlay.vue";

test("MdiTelevisionPlay snapshot", () => {
  const wrapper = mount(MdiTelevisionPlay, {});
  expect(wrapper.html()).toMatchSnapshot();
});
