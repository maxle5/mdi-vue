
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBaseballOutline from "../../src/components/MdiBaseballOutline.vue";

test("MdiBaseballOutline snapshot", () => {
  const wrapper = mount(MdiBaseballOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
