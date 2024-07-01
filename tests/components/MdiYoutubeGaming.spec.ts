
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiYoutubeGaming from "../../src/components/MdiYoutubeGaming.vue";

test("MdiYoutubeGaming snapshot", () => {
  const wrapper = mount(MdiYoutubeGaming, {});
  expect(wrapper.html()).toMatchSnapshot();
});
