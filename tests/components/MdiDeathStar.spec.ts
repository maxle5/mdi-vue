
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDeathStar from "../../src/components/MdiDeathStar.vue";

test("MdiDeathStar snapshot", () => {
  const wrapper = mount(MdiDeathStar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
