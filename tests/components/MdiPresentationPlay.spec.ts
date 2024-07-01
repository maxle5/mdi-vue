
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPresentationPlay from "../../src/components/MdiPresentationPlay.vue";

test("MdiPresentationPlay snapshot", () => {
  const wrapper = mount(MdiPresentationPlay, {});
  expect(wrapper.html()).toMatchSnapshot();
});
