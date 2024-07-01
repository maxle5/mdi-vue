
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarShootingOutline from "../../src/components/MdiStarShootingOutline.vue";

test("MdiStarShootingOutline snapshot", () => {
  const wrapper = mount(MdiStarShootingOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
