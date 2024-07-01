
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiYoutubeStudio from "../../src/components/MdiYoutubeStudio.vue";

test("MdiYoutubeStudio snapshot", () => {
  const wrapper = mount(MdiYoutubeStudio, {});
  expect(wrapper.html()).toMatchSnapshot();
});
