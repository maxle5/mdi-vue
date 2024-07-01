
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStar from "../../src/components/MdiStar.vue";

test("MdiStar snapshot", () => {
  const wrapper = mount(MdiStar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
