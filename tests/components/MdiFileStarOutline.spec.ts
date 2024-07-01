
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileStarOutline from "../../src/components/MdiFileStarOutline.vue";

test("MdiFileStarOutline snapshot", () => {
  const wrapper = mount(MdiFileStarOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
