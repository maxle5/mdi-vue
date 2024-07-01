
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiProgressStar from "../../src/components/MdiProgressStar.vue";

test("MdiProgressStar snapshot", () => {
  const wrapper = mount(MdiProgressStar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
