
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarOffOutline from "../../src/components/MdiStarOffOutline.vue";

test("MdiStarOffOutline snapshot", () => {
  const wrapper = mount(MdiStarOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
