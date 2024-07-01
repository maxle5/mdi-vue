
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSubtitlesOutline from "../../src/components/MdiSubtitlesOutline.vue";

test("MdiSubtitlesOutline snapshot", () => {
  const wrapper = mount(MdiSubtitlesOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
