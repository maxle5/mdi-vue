
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSubtitles from "../../src/components/MdiSubtitles.vue";

test("MdiSubtitles snapshot", () => {
  const wrapper = mount(MdiSubtitles, {});
  expect(wrapper.html()).toMatchSnapshot();
});
