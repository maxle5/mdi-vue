
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountStarOutline from "../../src/components/MdiAccountStarOutline.vue";

test("MdiAccountStarOutline snapshot", () => {
  const wrapper = mount(MdiAccountStarOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
