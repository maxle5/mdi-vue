
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveStarOutline from "../../src/components/MdiArchiveStarOutline.vue";

test("MdiArchiveStarOutline snapshot", () => {
  const wrapper = mount(MdiArchiveStarOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
