
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarCircleOutline from "../../src/components/MdiStarCircleOutline.vue";

test("MdiStarCircleOutline snapshot", () => {
  const wrapper = mount(MdiStarCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
