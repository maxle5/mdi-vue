
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSmoking from "../../src/components/MdiSmoking.vue";

test("MdiSmoking snapshot", () => {
  const wrapper = mount(MdiSmoking, {});
  expect(wrapper.html()).toMatchSnapshot();
});
