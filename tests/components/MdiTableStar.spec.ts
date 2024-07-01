
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableStar from "../../src/components/MdiTableStar.vue";

test("MdiTableStar snapshot", () => {
  const wrapper = mount(MdiTableStar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
