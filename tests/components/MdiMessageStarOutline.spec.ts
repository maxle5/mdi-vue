
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageStarOutline from "../../src/components/MdiMessageStarOutline.vue";

test("MdiMessageStarOutline snapshot", () => {
  const wrapper = mount(MdiMessageStarOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
