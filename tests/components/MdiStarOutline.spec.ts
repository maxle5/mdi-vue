
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarOutline from "../../src/components/MdiStarOutline.vue";

test("MdiStarOutline snapshot", () => {
  const wrapper = mount(MdiStarOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
